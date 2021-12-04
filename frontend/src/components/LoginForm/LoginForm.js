import React from "react";
import { Navigate, Route, useLocation, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import styles from "./LoginForm.module.css";

import { userLogIn } from "../../redux/actions/auth-actions";
import { userLogInRequest } from "../../redux/actions/auth-actions";

import { signInUser } from "../../services/auth-service.js";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
const LoginForm = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { isAuthenticated, loading, error } = useSelector(
		(state) => state.auth
	);
	const initialValues = {
		login: "",
		password: "",
	};
	const validationSchema = Yup.object({
		login: Yup.string().required("Введите email."),
		password: Yup.string().required("Введите пароль."),
	});

	const onSubmit = (e) => {
		const formData = {
			login: e.login,
			password: e.password,
		};
		//console.log(formData);
		//const obj = { dispatch, formData };

		signInUser(formData).then((data) => {
			dispatch(userLogInRequest());
			try {
				dispatch(userLogIn(data));
			} catch (e) {}
		});
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
	if (isAuthenticated) return <Navigate to='/' state={{ from: location }} />;

	return (
		<div className={styles.auth}>
			<Helmet>
				<title>Авторизация</title>
				<meta name='description' content='login page' />
			</Helmet>
			{error ? (
				<Alert
					style={{ marginBottom: 10 }}
					message={error.message}
					type='error'
					closable
					onClose={onClose}
				/>
			) : null}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(e) => onSubmit(e)}>
				<Form className={styles.auth__form}>
					<p className={styles.auth__title}>Авторизация</p>
					<div>
						<label htmlFor='login'></label>
						<Field
							className={styles.auth__form__input}
							name='login'
							type='text'
							placeholder='Логин'
						/>
						<div className={styles.auth__form_error}>
							<ErrorMessage name='login' />
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

					<button className={styles.auth__form__button} type='submit'>
						Войти
					</button>
					<Link className={styles.auth__link} to='/register'>
						Нет аккаунта?
					</Link>
					<Link className={styles.auth__link} to='/reset-password'>
						Забыли пароль?
					</Link>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
