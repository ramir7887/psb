import axios from "axios";
axios.defaults.baseURL = "http://89.223.65.66";

export const getCourses = async () => {
	const conf = {
		headers: {
			/* Accept: "application/json", */
			Token: `${localStorage.getItem("token")}`,
		},
	};
	const { data } = await axios.get("/User/cources", conf);
	//console.log(data);
	return data;
};

export const getUser = async (id) => {
	const conf = {
		headers: {
			/* Accept: "application/json", */
			Token: `${localStorage.getItem("token")}`,
		},
	};
	const { data } = await axios.get(`/User/?employee_id=${id}`, conf);
	//console.log(data);
	return data;
};
export const getUsers = async () => {
	const conf = {
		headers: {
			/* Accept: "application/json", */
			Token: `${localStorage.getItem("token")}`,
		},
	};
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/users`,
		conf
	);
	console.log(data);
	return data;
};

export const getCourseStage = async (id) => {
	const conf = {
		headers: {
			/* Accept: "application/json", */
			Token: `${localStorage.getItem("token")}`,
		},
	};
	const { data } = await axios.get(
		`/User/cource/stage?course_id=${id}&stage_id=${id}`,
		conf
	);
	//console.log(data);
	return data;
};

export const getExactUser = async (id) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return data;
};

export const createUser = async ({
	id,
	username,
	first_name,
	last_name,
	password,
	is_active,
}) => {
	const conf = {
		headers: {
			Accept: "application/json",
			Authorization: `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		id,
		username,
		first_name,
		last_name,
		password,
		is_active,
	});
	const { data } = await axios.post("api/v1/users/", body, conf);
	return data;
};

/* https://jsonplaceholder.typicode.com/users */
/* "https://fortnite-api.com/v1/playlists"; */
