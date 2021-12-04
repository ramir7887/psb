import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER_REQUEST,
	LOGIN_REQUEST,
} from "../actions/types";

import {
	/* 	signUp,
	signIn,
	signOut, */
	signInUser,
} from "../../services/auth-service";

export const userLogInRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};
const userSignUpRequest = () => {
	return {
		type: REGISTER_REQUEST,
	};
};

const userSignUp = () => {
	return {
		type: REGISTER_SUCCESS,
	};
};

export const userLogIn = (data) => {
	return {
		type: LOGIN_SUCCESS,
		payload: data,
	};
};
const userLogOut = () => {
	return {
		type: LOGOUT,
	};
};

const userSignUpFail = (error) => {
	return {
		type: REGISTER_FAIL,
		payload: error,
	};
};

const userLogInFail = (error) => {
	return {
		type: LOGIN_FAIL,
		payload: error,
	};
};

/* export const register = ({ dispatch, formData }) => {
	dispatch(userSignUpRequest());
	try {
		signUp(formData).then(({ data, error }) =>
			error ? dispatch(userSignUpFail(error)) : dispatch(userSignUp())
		);
	} catch (err) {}
};
 */
export const loginUser = ({ dispatch, formData }) => {
	dispatch(userLogInRequest());
	try {
		signInUser(formData).then(({ data, error }) =>
			error ? dispatch(userLogInFail(error)) : dispatch(userLogIn(data))
		);
	} catch (err) {}
};

export const logout = (dispatch) => {
	try {
		/* signOut().then(() =>  */ dispatch(userLogOut());
	} catch (err) {}
};
