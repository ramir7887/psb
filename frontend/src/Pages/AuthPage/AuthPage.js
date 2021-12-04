import React from "react";
//import {  } from "../../redux/actions/actions";
import "./AuthPage.less";

const AuthPage = ({ children }) => {
	//const  stateField = useSelector(({ field }) => field.something );

	return <div className='login-page__container'>{children}</div>;
};

export default AuthPage;
