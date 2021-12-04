import { supabase } from "./http-base";
import axios from "axios";
axios.defaults.baseURL = "http://89.223.65.66";

/* export const signUp = async (data) => await supabase.auth.signUp(data);
export const signIn = async (data) => await supabase.auth.signIn(data);
export const signOut = async () => await supabase.auth.signOut();

export const insertImageData = async (data) =>
	await supabase.from("images").insert([{ dataObj: data }]); */

export const signInUser = async ({ login, password }) => {
	const conf = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	};
	const body = {
		login,
		password,
	};
	const { data } = await axios.post("/Auth", body, conf);
	console.log(data);
	//localStorage.setItem("token", data.token);
	return data;
};
/* 			Authorization: `Token ${localStorage.getItem("token")}`,*/
