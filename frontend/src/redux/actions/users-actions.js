/* import {
	getUsers,
	getExactUser,
	createUser,
} from "../../services/users-service";

import axios from "axios";
import {
	FETCH_USERS_SUCCESS,
	FETCH_USERS_REQUEST,
	FETCH_USERS_FAIL,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
	EDIT_USER_SUCCESS,
	EDIT_USER_FAIL,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAIL,
} from "./types";

//Запросы (REQUEST TYPES)

const usersRequested = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

//Выполнено (SUCCESS TYPES)

const usersLoaded = (newUsers) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: newUsers,
	};
};

const userCreated = (user) => {
	return {
		type: CREATE_USER_SUCCESS,
		payload: user,
	};
};

//Ошибки (ERROR TYPES)

const usersError = (error) => {
	return {
		type: FETCH_USERS_FAIL,
		payload: error,
	};
};

const createUserError = (error) => {
	return {
		type: CREATE_USER_FAIL,
		payload: error,
	};
};

const deleteUserError = (error) => {
	return {
		type: DELETE_USER_FAIL,
		payload: error,
	};
};

const editUserError = (error) => {
	return {
		type: EDIT_USER_FAIL,
		payload: error,
	};
};

//Action creators:

//Запрос пользователей (GET)
const fetchUsers = (dispatch) => () => {
	dispatch(usersRequested()); // пользователи запрошены
	try {
		getUsers()
			.then((data) => {
				dispatch(usersLoaded(data));
			})
			.catch((err) => usersError(err));
	} catch (err) {}
};

//Создать (POST)

const postUserData =
	({ id, username, first_name, last_name, password, is_active }) =>
	(dispatch) => {
		try {
			createUser({
				id,
				username,
				first_name,
				last_name,
				password,
				is_active,
			}).then((data) => {
				dispatch(userCreated(data));
			});
		} catch (err) {
			createUserError(err);
		}
	};

//Удалить (DELETE)

const deleteUser = (id) => async (dispatch) => {
	const conf = {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	};

	try {
		const res = await axios.delete(`api/v1/users/${id}`, conf);
		dispatch({
			type: DELETE_USER_SUCCESS,
			payload: id,
		});
	} catch (err) {
		deleteUserError(err);
	}
};

// Редактировать (PUT)
const editUser =
	({ id, username, first_name, last_name, password, is_active }) =>
	async (dispatch) => {
		const conf = {
			headers: {
				Accept: "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			method: "put",
		};
		const body = JSON.stringify({
			username,
			first_name,
			last_name,
			password,
			is_active,
		});

		try {
			const res = await axios.put(`api/v1/users/${id}/`, body, conf);
			dispatch({
				type: EDIT_USER_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			editUserError(err);
		}
	};

export { fetchUsers, deleteUser, editUser, postUserData };
 */
