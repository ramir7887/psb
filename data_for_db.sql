INSERT INTO public.course
(course_id, "name", description, create_date, closed)
VALUES(1, 'Адаптация разарботчика', 'Курс направлен на адаптацию разработчика', '2021-12-03', false);
INSERT INTO public.course
(course_id, "name", description, create_date, closed)
VALUES(2, 'Адаптация тестировщика', 'Курс направлен на адаптацию тестировщика', '2021-12-03', false);


INSERT INTO public.department
(department_id, "name")
VALUES(6, 'секретариат');
INSERT INTO public.department
(department_id, "name")
VALUES(7, 'отдел кадров');
INSERT INTO public.department
(department_id, "name")
VALUES(8, 'юридический отдел');
INSERT INTO public.department
(department_id, "name")
VALUES(9, 'отдел кредитования физических лиц');
INSERT INTO public.department
(department_id, "name")
VALUES(10, 'кредитный отдел');
INSERT INTO public.department
(department_id, "name")
VALUES(11, 'операционный отдел');
INSERT INTO public.department
(department_id, "name")
VALUES(12, 'отдел учета и отчетности');
INSERT INTO public.department
(department_id, "name")
VALUES(13, 'административно-управленческий персонал');
INSERT INTO public.department
(department_id, "name")
VALUES(14, 'отдел безопасности');
INSERT INTO public.department
(department_id, "name")
VALUES(15, 'отдел финансового анализа и планирования');
INSERT INTO public.department
(department_id, "name")
VALUES(16, 'отдел депозитарных операций');
INSERT INTO public.department
(department_id, "name")
VALUES(17, 'отдел информационных технологий');
INSERT INTO public.department
(department_id, "name")
VALUES(18, 'административно-хозяйственный отдел');
INSERT INTO public.department
(department_id, "name")
VALUES(19, 'отдел кассовых операций');
INSERT INTO public.department
(department_id, "name")
VALUES(20, 'отдел учета, оформления и исполнения банковских операций');
INSERT INTO public.department
(department_id, "name")
VALUES(21, 'отдел операций на финансовых рынках и управления ресурсами');
INSERT INTO public.department
(department_id, "name")
VALUES(22, 'отдел валютных операций');
INSERT INTO public.department
(department_id, "name")
VALUES(23, 'архив');
INSERT INTO public.department
(department_id, "name")
VALUES(24, 'отдел факторинга');


INSERT INTO public.employee
(employee_id, personnel_number, full_name, position_id, boss_id, birth_date, email, mobile_phone, work_phone, work_place, image)
VALUES(1, '000001', 'Абдулов Рамир Ринатович', 4, NULL, '1994-10-25', 'ramir@mail.ru', NULL, NULL, NULL, NULL);
INSERT INTO public.employee
(employee_id, personnel_number, full_name, position_id, boss_id, birth_date, email, mobile_phone, work_phone, work_place, image)
VALUES(2, '000002', 'Островский Богдан Игоревич', 25, NULL, '1990-01-01', 'younggun@yahoo.com', NULL, NULL, NULL, NULL);
INSERT INTO public.employee
(employee_id, personnel_number, full_name, position_id, boss_id, birth_date, email, mobile_phone, work_phone, work_place, image)
VALUES(3, '000003', 'Утарбаев Рамазан Азгарович', 9, NULL, '1999-01-02', 'baschkir007@rambler.ru', NULL, NULL, NULL, NULL);


INSERT INTO public.login
(id, employee_id, login, "password", "token", create_date, end_date)
VALUES(1, 1, 'test_user', 'test_pass', 'QXbuBL6h1SI3ApZ7UEdeDHO7xhI=', '2021-12-03', '2022-01-02');


INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(1, 'Программист JavaScript', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(2, 'HTML-верстальщик', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(3, 'Web-дизайнер', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(4, 'Программист PHP', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(5, 'Программист Ruby', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(6, 'Программист Python', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(7, 'Программист Java', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(8, 'Программист C# (.NET)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(9, 'Программист SQL/Oracle', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(10, 'Программист Swift (ObC)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(11, 'Программист Android (java)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(12, 'Программист Unity3d (С#)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(13, 'Программист Unreal Engine (С++)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(14, 'Программист 1С', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(15, 'Программист С++ / C', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(16, 'Сетевой инженер', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(17, 'Системный администратор', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(18, 'DevOps', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(19, 'Администратор 1С', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(20, 'SEO-специалист', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(21, 'Менеджер интернет-проектов', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(22, 'Руководитель отдела IT (поддержка)', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(23, 'Системный аналитик', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(24, 'Специалист по ИБ', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(25, 'Тестировщик', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(26, 'Контент-менеджер', 17);
INSERT INTO public."position"
(position_id, "name", departament_id)
VALUES(27, '3D-дизайнер', 17);


INSERT INTO public."role"
(role_id, "name", description)
VALUES(1, 'Новый сотрудник', 'Роль для нового сотрудника, по ней навешивается курс Адаптация');
INSERT INTO public."role"
(role_id, "name", description)
VALUES(2, 'Наставник/Руководитель подразделения', 'Роль для сотрудника выступающего наставником');
INSERT INTO public."role"
(role_id, "name", description)
VALUES(3, 'Руководитель проекта/Scrum master/Владелец продукта', 'Видит все');


INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(1, 'Получение доступов основные системы', 'Вся необходимая информация по получению доступов в системы необходимые для осуществления работы', 1, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(2, 'Инструктаж по технике пожарной безопасности', 'Проведение инструктажа по технике пожарной безопасности', 1, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(3, 'Получить набор новичка', NULL, 1, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(4, 'Познакомиться с командой', NULL, 2, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(5, 'Цели, миссия компании', NULL, 2, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(6, 'Знакомство с системами ведения задач', NULL, 2, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(7, 'Как правильно читать документацию', NULL, 2, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(8, 'Знакомство с проектом', NULL, 2, false, NULL);
INSERT INTO public.stage
(stage_id, "name", description, time_to_pass, closed, "content")
VALUES(9, 'Знакомство с разрабатываемой системой', NULL, 2, false, NULL);


INSERT INTO public.test
(test_id, "name", description, create_date)
VALUES(1, 'Проверка знаний по технике пожарной безопасности', 'Предназначен для проверки усвоения материала по технике пожарной безопасности', '2021-12-03');


INSERT INTO public.question
(question_id, test_id, "name")
VALUES(1, 1, 'Можно ли играться с огнем в помещении?');
INSERT INTO public.question
(question_id, test_id, "name")
VALUES(2, 1, 'Можно ли поджигать офисную мебель и оборудование?');
INSERT INTO public.question
(question_id, test_id, "name")
VALUES(3, 1, 'Можно ли запускать в офисе фейрверки и шутихи с коллегами в офисе в обеденный перерыв?');


INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(3, 1, 'Да, если начальник в отпуске, а ты нет', false);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(4, 2, 'ДА', false);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(5, 2, 'НЕТ', true);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(6, 2, 'Да, если уже подписано заявление об увольнении', false);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(1, 1, 'ДА', false);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(2, 1, 'НЕТ', true);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(7, 3, 'ДА', false);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(8, 3, 'НЕТ', true);
INSERT INTO public.answer
(answer_id, question_id, "name", "right")
VALUES(9, 3, 'Да, если коллеги очень просят', false);


INSERT INTO public.achievement
(achievement_id, "name", description, image)
VALUES(1, 'Пожара не будет', 'Достижение по прохождении информирования пожарной безопасности', 'аааааааааа');


INSERT INTO public.course_role
(course_id, role_id)
VALUES(1, 1);


INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 1);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 2);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 3);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 4);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 5);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 6);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 7);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 8);
INSERT INTO public.course_stage
(course_id, stage_id)
VALUES(1, 9);


INSERT INTO public.employee_course
(employee_id, course_id, id, create_date, start_date, end_date, complited)
VALUES(1, 1, 1, '2021-12-03', '2021-12-03', NULL, NULL);


INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(1, 1, 1, 1, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(2, 1, 1, 2, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(3, 1, 1, 3, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(4, 1, 1, 4, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(5, 1, 1, 5, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(6, 1, 1, 6, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(7, 1, 1, 7, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(8, 1, 1, 8, '2021-12-03', NULL, NULL, false);
INSERT INTO public.employee_stage
(id, employee_id, course_id, stage_id, create_date, start_date, end_date, complited)
VALUES(9, 1, 1, 9, '2021-12-03', NULL, NULL, false);


INSERT INTO public.employee_test
(id, employee_id, stage_id, test_id, create_date, start_date, end_date, count, complited)
VALUES(1, 1, 2, 1, '2021-12-03', NULL, '2021-12-03', 0, true);


INSERT INTO public.position_role
(position_id, role_id)
VALUES(1, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(2, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(3, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(4, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(5, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(6, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(7, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(8, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(9, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(10, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(11, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(12, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(13, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(14, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(15, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(16, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(17, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(18, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(19, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(20, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(21, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(22, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(23, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(24, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(25, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(26, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(27, 1);
INSERT INTO public.position_role
(position_id, role_id)
VALUES(27, 2);


INSERT INTO public.stage_test
(stage_id, test_id)
VALUES(2, 1);


INSERT INTO public.rankratereference
("rank", rate)
VALUES('Newbee', 100);
INSERT INTO public.rankratereference
("rank", rate)
VALUES('Soldier', 500);
INSERT INTO public.rankratereference
("rank", rate)
VALUES('Сolonel', 1000);
INSERT INTO public.rankratereference
("rank", rate)
VALUES('General', 1000);
INSERT INTO public.rankratereference
("rank", rate)
VALUES('Admiral', 2000);


INSERT INTO public.rating
(employee_id, rate, "rank")
VALUES(1, 100, 'Newbee');


