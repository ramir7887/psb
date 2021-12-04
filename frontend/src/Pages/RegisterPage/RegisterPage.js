import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
//import {} from "../../redux/actions/actions";

import "./RegisterPage.less";

const RegisterPage = () => {
	return (
		<div className='register-page__container'>
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
