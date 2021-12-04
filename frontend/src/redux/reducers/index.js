import { combineReducers } from "redux";
import auth from "./auth";
import appUsers from "./users";

export default combineReducers({ appUsers, auth });
