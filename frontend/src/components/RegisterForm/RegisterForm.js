import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Alert } from "antd";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import styles from "./RegisterForm.module.css";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
/* import { register } from "../../redux/actions/auth-actions"; */

const RegisterForm = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);
	const [message, setMessage] = useState(false);
	const initialValues = {
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		password: "",
	};
	const validationSchema = Yup.object({
		/* 	username: Yup.string()
			.max(15, "Не более 15 символов")
			.required("Введите username."), */
		email: Yup.string().required("Введите email."),
		/* 	firstName: Yup.string()
			.max(15, "Не более 15 символов")
			.required("Введите Имя."),
		lastName: Yup.string()
			.max(20, "Не более 20 символов.")
			.required("Введите Фамилию."), */
		password: Yup.string()
			.required("Введите пароль.")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&<>])[A-Za-z\d@$!%*#?&<>]{8,}$/,
				"Пароль должен содержать не менее 8 символов,\nзаглавную букву,\nцифру и один из специальных символов @$!%*#?&<> !"
			),
	});

	const onSubmit = (e) => {
		const formData = {
			/* 		id: uuid(),
			username: e.username, */
			email: e.email,
			/* 	first_name: e.firstName,
			last_name: e.lastName, */
			password: e.password,
			/* 			is_active: true, */
		};
		const obj = { dispatch, formData };
		/* register(obj); */
		setMessage(true);
	};
	const onClose = (e) => {
		console.log(e, "I was closed.");
	};
	if (loading)
		return (
			<div className={styles.auth}>
				<LoadingIndicator />
			</div>
		);
	return (
		<div className={styles.auth}>
			<Helmet>
				<title>Регистрация</title>
				<meta name='description' content='create user page' />
			</Helmet>
			{message ? (
				<Alert
					message='Успешно! Ссылка подтверждения отправлена вам на почту.'
					type='success'
					closable
					onClose={onClose}
					style={{ marginBottom: 10 }}
					className={styles.auth__message}
				/>
			) : null}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(e) => onSubmit(e)}>
				<Form className={styles.auth__form}>
					<p className={styles.auth__title}>Создать аккаунт</p>
					{/* <div>
						<label htmlFor='username'>Username</label>
						<Field
							className={styles.auth__form__input}
							name='username'
							type='text'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='username' />
						</div>
					</div> */}

					<div>
						<label htmlFor='email'></label>
						<Field
							className={styles.auth__form__input}
							name='email'
							type='text'
							placeholder='Email'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='email' />
						</div>
					</div>
					<div>
						<label htmlFor='firstName'></label>
						<Field
							className={styles.auth__form__input}
							name='firstName'
							type='text'
							placeholder='Имя'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='firstName' />
						</div>
					</div>

					<div>
						<label htmlFor='lastName'></label>
						<Field
							className={styles.auth__form__input}
							name='lastName'
							type='text'
							placeholder='Фамилия'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='lastName' />
						</div>
					</div>
					<div>
						<label htmlFor='password'></label>
						<Field
							className={styles.auth__form__input}
							name='password'
							type='password'
							placeholder='Пароль'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='password' />
						</div>
					</div>
					<div>
						<label htmlFor='team'></label>
						<Field
							className={styles.auth__form__input}
							name='Команда'
							as='select'>
							<option value='--'>--</option>
							<option value='QA'>QA</option>
							<option value='Frontend'>Frontend</option>
							<option value='Backend'>Backend</option>
							<option value='Manager'>Manager</option>
						</Field>
					</div>
					<button className={styles.auth__form__button} type='submit'>
						Регистрация
					</button>
					<Link to='/login'>Уже есть аккаунт?</Link>
				</Form>
			</Formik>
		</div>
	);
};

export default RegisterForm;
