import psycopg2

# Тут будет соединение с ДБ. методы уже не статические.
# Создавать объект в МЭЙНЕ, передаем конфиг в конструктор. 


class Singleton(object):
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not isinstance(cls._instance, cls):
            cls._instance = object.__new__(cls, *args, **kwargs)
        return cls._instance

# TODO: Сделать методы типа селект инсерт апдейт.
class DB(Singleton):

    connection = None
    config = {}

    def set_config(self, config):
        self.config = config['db']

    def connect(self, config=False):
        if config and not self.config:
            print(bool(config), bool(self.config))
            self.set_config(config)
        if self.connection is None:
            self.connection = psycopg2.connect(host=self.config['host'],
                                               database=self.config['dbname'],
                                               user=self.config['login'],
                                               password=self.config['pass'],
                                               port=self.config['port'])
            return self

    def close(self):
        if self.connection.is_connected():
            self.connection.close()
            print("Connection to DB close")

    def exec(self, query, params=[]):
        """
        Общий метод для выполнения запросов в БД
        :param query:
        :param params:
        :return:
        """
        cursor = self.connection.cursor(dictionary=True)
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        if cursor.lastrowid:
            self.connection.commit()
        else:
            result = cursor.fetchall()
            return result

    def insert(self, query, params=[]):
        """
        Вставка данных в БД на основе переданного запроса и параметров
        :param query: string:
        :param params: list() or list(tuple(),...):  list of parameters OR list of tuples of parameters
        :return: int: last row ID
        """
        cursor = self.connection.cursor()

        try:
            if params:
                if params and isinstance(params[0], tuple):
                    cursor.executemany(query, params)
                else:
                    cursor.execute(query, params)
            else:
                cursor.execute(query)
            if cursor.lastrowid:
                self.connection.commit()
                return cursor.lastrowid
            else:
                raise psycopg2.Error('Not last row ID')

        except psycopg2.Error as error:
            print(error)
            return False
        finally:
            cursor.close()

    def update(self, query, params=[]):
        cursor = self.connection.cursor(dictionary=True)
        try:
            if params:
                if params and isinstance(params[0], tuple):
                    cursor.executemany(query, params)
                else:
                    cursor.execute(query, params)
            else:
                cursor.execute(query)
            self.connection.commit()
            return True
        except psycopg2.Error as error:
            print(error)
            return False
        finally:
            cursor.close()

    def select(self, query, params=[]):
        cursor = self.connection.cursor()
        try:
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            rows = cursor.fetchall()
            return rows
        except psycopg2.Error as error:
            print(error)
            return False
        finally:
            cursor.close()


