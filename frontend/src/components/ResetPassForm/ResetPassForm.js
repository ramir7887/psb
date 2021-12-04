import React, { useState } from "react";
import { Navigate, Route, useLocation, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import styles from "./ResetPassForm.module.css";
//import { login } from "../../redux/actions/auth-actions";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
const ResetPassForm = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [message, setMessage] = useState(false);
	const { isAuthenticated, loading, error } = useSelector(
		(state) => state.auth
	);
	const initialValues = {
		email: "",
	};
	const validationSchema = Yup.object({
		email: Yup.string().required("Введите email."),
	});

	const onSubmit = (e) => {
		const formData = {
			email: e.email,
		};
		const obj = { dispatch, formData };
		/* login(obj); */
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
	if (isAuthenticated) return <Navigate to='/' state={{ from: location }} />;

	return (
		<div className={styles.auth}>
			<Helmet>
				<title>Восстановление пароля</title>
				<meta name='description' content='login page' />
			</Helmet>
			{message ? (
				<Alert
					message='Успешно! Ссылка восстановления отправлена вам на почту.'
					type='success'
					closable
					onClose={onClose}
					style={{ marginBottom: 10 }}
				/>
			) : null}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(e) => onSubmit(e)}>
				<Form className={styles.auth__form}>
					<p className={styles.auth__title}>Восстановить пароль</p>
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
					<button className={styles.auth__form__button} type='submit'>
						Отправить
					</button>
					<Link className='auth__link' to='/login'>
						Есть уч.запись?
					</Link>
				</Form>
			</Formik>
		</div>
	);
};

export default ResetPassForm;
