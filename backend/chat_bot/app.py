import logging
import random
import psycopg2
from datetime import datetime
from telegram.ext import Updater
from telegram.ext import CommandHandler
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import MessageHandler, Filters
from telegram.ext import CallbackQueryHandler
from config import Config
from typing import Dict, List

# ЛОГГЕР
logging.basicConfig(filename="bot_log.log", level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')



TOKEN = Config.get_config()['bot']['token']
updater = Updater(token=TOKEN, use_context=True)
dispatcher = updater.dispatcher


class BotMethods:
    map_state = {
        'start': {
            'keys':{
                'login': 'Ввести логин'
            },
            'message': 'Добрый день! Бот будет обеспечивать Вас напоминаниями о прохождении тестов! Авторизуйтесь чтобы получать уведомления.'
        },
        'login':{
            'keys':{
                'start':'Назад', 
            },
            'message': 'Введите ваш логин в строку для ввода сообщений'
        },        
    }


    def __init__(self):
        self.config = Config.get_config()['db']

    def set_state(self, chat_id, username='def', state='start'):
        # user_exist = self.db.select(f'SELECT state FROM hackinhome.users WHERE chat_id = {chat_id}')
        if state=='start':
            query = f"delete from public.telegram where chat_id = \'{chat_id}\'"
            self.executeQuery(query,transaction=True)
        else:
            query = f"insert into public.telegram(chat_id, user_name, state) values ({chat_id},'{username}','{state}')"
            self.executeQuery(query=query, transaction=True)

    def get_state(self, chat_id):
        user_exist = self.executeQuery(f'SELECT * FROM public.telegram WHERE chat_id = {chat_id}')
        if user_exist:
            print(user_exist)
            return user_exist[0][3]

    def send_for_debtor(self, context):
        query: str = "select e.email , t.chat_id , t.user_name, s.name from employee_stage es join employee e on es.employee_id = e.employee_id join telegram t on e.tg_user_name = t.user_name join stage s on es.stage_id =s.stage_id where e.tg_user_name is not null and es.end_date is null and date_part('hour', now() - es.start_date) > s.time_to_pass"

        rows: List = self.executeQuery(query=query)

        if len(rows) == 0:
            print(" должников нет")
            return
        for row in rows:
            context.bot.send_message(chat_id=row[1],
                                     text=f"Добрый день, коллега! У тебя не закрыт этап {row[3]}. Ты действительно хочешь проблем? Ммм? Может уже пройдешь его а?")

    def get_random_users(self, update, context):
        query: str = "select e.email, t.chat_id from  employee e join telegram t on e.tg_user_name = t.user_name where tg_user_name is not null"

        rows: List = self.executeQuery(query=query)

        if len(rows) < 2:
            print("Нет столько сотрудников")
            return []
        first_user: Dict = rows.pop(random.randint(len(rows)))
        second_user: Dict = rows.pop(random.randint(len(rows)))

        first_user[1], second_user[1] = second_user[1], first_user[1]

        # return [first_user, second_user]

    def executeQuery(self, query, transaction=False):
        print("in query")
        conn = None
        try:
            print(self.config['host'])
            conn = psycopg2.connect(host=self.config['host'],
                                            database=self.config['dbname'],
                                            user=self.config['login'],
                                            password=self.config['pass'],
                                            port=self.config['port'])
            cur = conn.cursor()
            cur.execute(query)
            if transaction == True:
               conn.commit()
               db_result = cur.rowcount
            else:
                db_result = cur.fetchall()
            cur.close()
            return db_result
        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
        finally:
            if conn is not None:
               conn.close()

       #### КОМАНДА СТАРТ
    def start(self,update, context):
        query = f'SELECT * FROM public.telegram WHERE chat_id = {update.effective_chat.id}'
        db_result = self.executeQuery(query=query)
        if db_result:
            if db_result[0][3] != 'login':
                context.bot.send_message(chat_id=update.effective_chat.id, text="Добрый день, коллега!")

            else:
                context.bot.send_message(chat_id=update.effective_chat.id,
                                         text="Введите ваш логин в строку для ввода сообщений",
                                         reply_markup=InlineKeyboardMarkup(
                                             [[InlineKeyboardButton(text='Назад', callback_data='start')]]))
        else:
            context.bot.send_message(chat_id=update.effective_chat.id,
                                     text="Добрый день! Бот будет обеспечивать Вас напоминаниями о прохождении тестов! Авторизуйтесь чтобы получать уведомления.",
                                     reply_markup=InlineKeyboardMarkup(
                                         [[InlineKeyboardButton(text='Ввести логин', callback_data='login')]]))


    def get_keyboard(self, map):
        keyboard = []
        for key, value in map.items():
            keyboard.append([InlineKeyboardButton(text=value, callback_data=key)])
        return InlineKeyboardMarkup( keyboard)


    #ОБРАБАТЫВАЕТ ЗАПРОСЫ ОТ ВСЕХ КНОПОК
    def callback_button_handler(self,update, context):
        query = update.callback_query
        # CallbackQueries need to be answered, even if no notification to the user is needed
        # Some clients may have trouble otherwise. See https://core.telegram.org/bots/api#callbackquery
        query.answer()
        
        if query.data in self.map_state.keys():
            print(query.data)
            query.edit_message_text(text=self.map_state[query.data]['message'], reply_markup= self.get_keyboard(self.map_state[query.data]['keys']))
            self.set_state(update.effective_chat.id, update.effective_user.username, query.data)
       
    #ЕСЛИ не распознал команду /команда
    def unknown(self,update, context):
        state = self.get_state(update.effective_chat.id)
        if state == 'login':
            print(state)
            chat_id = update.effective_chat.id
            text = str(update.message.text)
            print(chat_id,state)
            query = f'SELECT * FROM public.login WHERE login = \'{text}\''
            db_result = self.executeQuery(query)
            if db_result:
                print(db_result)
                query = f'SELECT * FROM public.employee WHERE tg_user_name = \'{update.effective_user.username}\''
                db_result = self.executeQuery(query)
                context.bot.send_message(chat_id=update.effective_chat.id, text=f"{db_result[0][2]}, вы успешно вошли.")
                self.set_state(update.effective_chat.id, update.effective_user.username, "auth")
            else:
                context.bot.send_message(chat_id=update.effective_chat.id,
                                         text="Неверно!")


botMethods = BotMethods()

job = updater.job_queue
print('Бот стартовал')

time = datetime.time(9,30,0)
job.run_daily(botMethods.get_random_users,time)

time_for_debitor = datetime.time(9, 40, 0)
job.run_daily(botMethods.send_for_debtor, time_for_debitor)

##ДОБАВЛЕНИЕ ХЕНДЛЕРОВ
dispatcher.add_handler(CallbackQueryHandler(botMethods.callback_button_handler))
start_handler = CommandHandler('start', botMethods.start)
dispatcher.add_handler(start_handler)

unknown_handler = MessageHandler(Filters.text, botMethods.unknown)
dispatcher.add_handler(unknown_handler)


updater.start_polling()