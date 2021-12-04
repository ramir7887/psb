import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "../actions/types";

export default function auth(state, action) {
	const { type, payload } = action;
	if (state === undefined) {
		return {
			token: localStorage.getItem("token"),
			isAuthenticated: localStorage.getItem("token") ? true : null,
			loading: false,
		};
	}
	switch (type) {
		case REGISTER_REQUEST:
		case LOGIN_REQUEST:
			return {
				...state,
				isAuthenticated: false,
				loading: true,
				error: null,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				error: null,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			localStorage.setItem("employee_id", payload.employee_id);
			return {
				...state,
				error: null,
				loading: false,
				isAuthenticated: true,
				token: payload.token,
				employee_id: payload.employee_id,
			};
		case LOGOUT:
			localStorage.removeItem("token");
			localStorage.removeItem("employee_id");
			return {
				...state,
				error: null,
				loading: false,
				isAuthenticated: false,
				token: null,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			return {
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
}
