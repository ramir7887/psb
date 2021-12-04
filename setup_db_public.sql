-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION postgres;

COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.achievement_achievement_id_seq;

CREATE SEQUENCE public.achievement_achievement_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.answer_answer_id_seq;

CREATE SEQUENCE public.answer_answer_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.course_course_id_seq;

CREATE SEQUENCE public.course_course_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.department_department_id_seq;

CREATE SEQUENCE public.department_department_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_boss_id_seq;

CREATE SEQUENCE public.employee_boss_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_course_id_seq;

CREATE SEQUENCE public.employee_course_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_employee_id_seq;

CREATE SEQUENCE public.employee_employee_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_position_id_seq;

CREATE SEQUENCE public.employee_position_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_stage_id_seq;

CREATE SEQUENCE public.employee_stage_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.employee_test_id_seq;

CREATE SEQUENCE public.employee_test_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.login_id_seq;

CREATE SEQUENCE public.login_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.page_page_id_seq;

CREATE SEQUENCE public.page_page_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.position_position_id_seq;

CREATE SEQUENCE public.position_position_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.question_question_id_seq;

CREATE SEQUENCE public.question_question_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.role_role_id_seq;

CREATE SEQUENCE public.role_role_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.stage_stage_id_seq;

CREATE SEQUENCE public.stage_stage_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.telegram_id_seq;

CREATE SEQUENCE public.telegram_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.test_test_id_seq;

CREATE SEQUENCE public.test_test_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public.achievement definition

-- Drop table

-- DROP TABLE public.achievement;

CREATE TABLE public.achievement (
	achievement_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	description varchar NULL,
	image varchar NULL,
	CONSTRAINT achievement_pk PRIMARY KEY (achievement_id)
);


-- public.course definition

-- Drop table

-- DROP TABLE public.course;

CREATE TABLE public.course (
	course_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	description varchar NULL,
	create_date date NOT NULL,
	closed bool NOT NULL DEFAULT false,
	CONSTRAINT course_pk PRIMARY KEY (course_id)
);
COMMENT ON TABLE public.course IS 'Список курсов';


-- public.department definition

-- Drop table

-- DROP TABLE public.department;

CREATE TABLE public.department (
	department_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	CONSTRAINT department_pk PRIMARY KEY (department_id)
);


-- public.employee_achievement definition

-- Drop table

-- DROP TABLE public.employee_achievement;

CREATE TABLE public.employee_achievement (
	employee_id int4 NOT NULL,
	achievement_id int4 NOT NULL,
	stage_id int4 NOT NULL,
	create_date timestamp NULL
);


-- public.rankratereference definition

-- Drop table

-- DROP TABLE public.rankratereference;

CREATE TABLE public.rankratereference (
	"rank" varchar NULL,
	rate int4 NULL
);
COMMENT ON TABLE public.rankratereference IS 'Справочник рейтинга и ранга';


-- public."role" definition

-- Drop table

-- DROP TABLE public."role";

CREATE TABLE public."role" (
	role_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	description varchar NULL,
	CONSTRAINT role_pk PRIMARY KEY (role_id)
);
COMMENT ON TABLE public."role" IS 'таблица ролей';


-- public.stage definition

-- Drop table

-- DROP TABLE public.stage;

CREATE TABLE public.stage (
	stage_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	description varchar NULL,
	time_to_pass int4 NULL DEFAULT 2, -- Время в часах на прохождение этапа
	closed bool NOT NULL DEFAULT false,
	"content" json NULL, -- Это контент для отрисовки потом на страничке
	CONSTRAINT stage_pk PRIMARY KEY (stage_id)
);
COMMENT ON TABLE public.stage IS 'Таблица этапов . Этапы входят в курс.';

-- Column comments

COMMENT ON COLUMN public.stage.time_to_pass IS 'Время в часах на прохождение этапа';
COMMENT ON COLUMN public.stage."content" IS 'Это контент для отрисовки потом на страничке';


-- public.telegram definition

-- Drop table

-- DROP TABLE public.telegram;

CREATE TABLE public.telegram (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	chat_id varchar NULL,
	user_name varchar NULL,
	CONSTRAINT telegram_pk PRIMARY KEY (id)
);


-- public.test definition

-- Drop table

-- DROP TABLE public.test;

CREATE TABLE public.test (
	test_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	description varchar NULL,
	create_date date NULL DEFAULT now(),
	CONSTRAINT test_pk PRIMARY KEY (test_id)
);


-- public.course_role definition

-- Drop table

-- DROP TABLE public.course_role;

CREATE TABLE public.course_role (
	course_id int4 NOT NULL,
	role_id int4 NOT NULL,
	CONSTRAINT course_role_pk PRIMARY KEY (course_id, role_id),
	CONSTRAINT course_role_fk FOREIGN KEY (course_id) REFERENCES public.course(course_id),
	CONSTRAINT course_role_fk_1 FOREIGN KEY (role_id) REFERENCES public."role"(role_id)
);
COMMENT ON TABLE public.course_role IS 'Отношение курсов  ролей для доступа к этим курсам';


-- public.course_stage definition

-- Drop table

-- DROP TABLE public.course_stage;

CREATE TABLE public.course_stage (
	course_id int4 NOT NULL,
	stage_id int4 NOT NULL,
	CONSTRAINT newtable_pk PRIMARY KEY (course_id, stage_id),
	CONSTRAINT newtable_fk FOREIGN KEY (course_id) REFERENCES public.course(course_id),
	CONSTRAINT newtable_fk_1 FOREIGN KEY (stage_id) REFERENCES public.stage(stage_id)
);


-- public.page definition

-- Drop table

-- DROP TABLE public.page;

CREATE TABLE public.page (
	page_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	course_id int4 NOT NULL,
	"name" varchar NOT NULL,
	description varchar NULL,
	"content" json NULL,
	create_date date NOT NULL,
	closed bool NOT NULL DEFAULT false,
	CONSTRAINT page_pk PRIMARY KEY (page_id),
	CONSTRAINT page_fk FOREIGN KEY (course_id) REFERENCES public.course(course_id)
);
COMMENT ON TABLE public.page IS 'Страницы ( относятся к конкретному курсу)';


-- public."position" definition

-- Drop table

-- DROP TABLE public."position";

CREATE TABLE public."position" (
	position_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	departament_id int4 NOT NULL, -- Идентификатор департамента
	CONSTRAINT position_pk PRIMARY KEY (position_id),
	CONSTRAINT position_fk FOREIGN KEY (departament_id) REFERENCES public.department(department_id)
);
COMMENT ON TABLE public."position" IS 'Таблица позиций';

-- Column comments

COMMENT ON COLUMN public."position".departament_id IS 'Идентификатор департамента';


-- public.position_role definition

-- Drop table

-- DROP TABLE public.position_role;

CREATE TABLE public.position_role (
	position_id int4 NOT NULL,
	role_id int4 NOT NULL,
	CONSTRAINT position_role_pk PRIMARY KEY (position_id, role_id),
	CONSTRAINT position_role_fk FOREIGN KEY (position_id) REFERENCES public."position"(position_id),
	CONSTRAINT position_role_fk_1 FOREIGN KEY (role_id) REFERENCES public."role"(role_id)
);
COMMENT ON TABLE public.position_role IS 'таблица ролей для позиции';


-- public.question definition

-- Drop table

-- DROP TABLE public.question;

CREATE TABLE public.question (
	question_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	test_id int4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT question_pk PRIMARY KEY (question_id),
	CONSTRAINT question_fk FOREIGN KEY (test_id) REFERENCES public.test(test_id)
);


-- public.stage_achievement definition

-- Drop table

-- DROP TABLE public.stage_achievement;

CREATE TABLE public.stage_achievement (
	stage_id int4 NOT NULL,
	achievement_id int4 NOT NULL,
	CONSTRAINT stage_achievement_pk PRIMARY KEY (stage_id, achievement_id),
	CONSTRAINT stage_achievement_fk FOREIGN KEY (stage_id) REFERENCES public.stage(stage_id),
	CONSTRAINT stage_achievement_fk_1 FOREIGN KEY (achievement_id) REFERENCES public.achievement(achievement_id)
);


-- public.stage_test definition

-- Drop table

-- DROP TABLE public.stage_test;

CREATE TABLE public.stage_test (
	stage_id int4 NOT NULL,
	test_id int4 NOT NULL,
	CONSTRAINT stage_test_pk PRIMARY KEY (stage_id, test_id),
	CONSTRAINT stage_test_fk FOREIGN KEY (stage_id) REFERENCES public.stage(stage_id),
	CONSTRAINT stage_test_fk_1 FOREIGN KEY (test_id) REFERENCES public.test(test_id)
);
COMMENT ON TABLE public.stage_test IS 'связь этапов и тестов';


-- public.answer definition

-- Drop table

-- DROP TABLE public.answer;

CREATE TABLE public.answer (
	answer_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	question_id int4 NOT NULL,
	"name" varchar NOT NULL,
	"right" bool NOT NULL DEFAULT true, -- Правильный ли это вариант ответа на вопрос
	CONSTRAINT answer_pk PRIMARY KEY (answer_id),
	CONSTRAINT answer_fk FOREIGN KEY (question_id) REFERENCES public.question(question_id)
);

-- Column comments

COMMENT ON COLUMN public.answer."right" IS 'Правильный ли это вариант ответа на вопрос';


-- public.employee definition

-- Drop table

-- DROP TABLE public.employee;

CREATE TABLE public.employee (
	employee_id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	personnel_number varchar NOT NULL,
	full_name varchar NOT NULL,
	position_id int4 NOT NULL, -- Позиция сорудника. Таблица position
	boss_id int4 NULL, -- Идентификатор из этой же таблицы
	birth_date date NULL, -- Дата рождения сотрудника
	email varchar NULL,
	mobile_phone varchar NULL,
	work_phone varchar NULL,
	work_place varchar NULL, -- Рабочее место, адрес, номер кабинета и т.п.
	image varchar NULL,
	tg_user_name varchar NULL,
	CONSTRAINT employee_pk PRIMARY KEY (employee_id),
	CONSTRAINT employee_fk FOREIGN KEY (position_id) REFERENCES public."position"(position_id)
);
COMMENT ON TABLE public.employee IS 'Таблица сотрудников, основная информация по сотруднику и кто его начальник. Начальник тоже сотрудник и тоже находится в этой таблице.';

-- Column comments

COMMENT ON COLUMN public.employee.position_id IS 'Позиция сорудника. Таблица position';
COMMENT ON COLUMN public.employee.boss_id IS 'Идентификатор из этой же таблицы';
COMMENT ON COLUMN public.employee.birth_date IS 'Дата рождения сотрудника';
COMMENT ON COLUMN public.employee.work_place IS 'Рабочее место, адрес, номер кабинета и т.п.';


-- public.employee_course definition

-- Drop table

-- DROP TABLE public.employee_course;

CREATE TABLE public.employee_course (
	employee_id int4 NOT NULL,
	course_id int4 NOT NULL,
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	create_date date NULL,
	start_date date NULL,
	end_date date NULL,
	complited bool NULL,
	CONSTRAINT employee_course_pk PRIMARY KEY (id),
	CONSTRAINT employee_course_fk FOREIGN KEY (course_id) REFERENCES public.course(course_id),
	CONSTRAINT employee_course_fk_1 FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id)
);
COMMENT ON TABLE public.employee_course IS 'таблица для назначения курсов пользователям. тут один к одному - одна запись на  один курс для пользователя.';


-- public.employee_stage definition

-- Drop table

-- DROP TABLE public.employee_stage;

CREATE TABLE public.employee_stage (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	employee_id int4 NOT NULL,
	course_id int4 NOT NULL,
	stage_id int4 NOT NULL,
	create_date date NOT NULL DEFAULT now(),
	start_date date NULL,
	end_date date NULL,
	complited bool NOT NULL DEFAULT false,
	CONSTRAINT employee_stage_pk PRIMARY KEY (id),
	CONSTRAINT employee_stage_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id),
	CONSTRAINT employee_stage_fk_1 FOREIGN KEY (course_id) REFERENCES public.course(course_id),
	CONSTRAINT employee_stage_fk_2 FOREIGN KEY (stage_id) REFERENCES public.stage(stage_id)
);
COMMENT ON TABLE public.employee_stage IS 'таблица сотрудник этапы курса назначенного ему. Сколько этапов в курсе столько и записей для сотрудника.';


-- public.employee_test definition

-- Drop table

-- DROP TABLE public.employee_test;

CREATE TABLE public.employee_test (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	employee_id int4 NOT NULL,
	stage_id int4 NOT NULL,
	test_id int4 NOT NULL,
	create_date date NOT NULL DEFAULT now(),
	start_date date NULL,
	end_date date NULL,
	count int4 NULL DEFAULT 0, -- количество неудачных попыток
	complited bool NOT NULL DEFAULT false,
	CONSTRAINT employee_test_pk PRIMARY KEY (id),
	CONSTRAINT employee_test_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id),
	CONSTRAINT employee_test_fk_1 FOREIGN KEY (stage_id) REFERENCES public.stage(stage_id),
	CONSTRAINT employee_test_fk_2 FOREIGN KEY (test_id) REFERENCES public.test(test_id)
);
COMMENT ON TABLE public.employee_test IS 'таблица связи сотрудника и теста на этапе. сколько тестов в этапе столько и записей для сотрудника';

-- Column comments

COMMENT ON COLUMN public.employee_test.count IS 'количество неудачных попыток';


-- public.login definition

-- Drop table

-- DROP TABLE public.login;

CREATE TABLE public.login (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	employee_id int4 NOT NULL,
	login varchar NOT NULL,
	"password" varchar NOT NULL,
	"token" varchar NULL,
	create_date date NULL,
	end_date date NULL,
	CONSTRAINT login_pk PRIMARY KEY (id),
	CONSTRAINT login_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id)
);
COMMENT ON TABLE public.login IS 'Таблица для аутентификации пользователя';


-- public.rating definition

-- Drop table

-- DROP TABLE public.rating;

CREATE TABLE public.rating (
	employee_id int4 NOT NULL,
	rate int4 NULL,
	"rank" varchar NULL,
	CONSTRAINT rating_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id)
);
COMMENT ON TABLE public.rating IS 'Таблица рейтинга пользователей';


-- public."token" definition

-- Drop table

-- DROP TABLE public."token";

CREATE TABLE public."token" (
	employee_id int4 NOT NULL,
	"token" varchar NOT NULL,
	create_date date NOT NULL,
	end_date date NULL,
	CONSTRAINT token_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id)
);
COMMENT ON TABLE public."token" IS 'токены .';
