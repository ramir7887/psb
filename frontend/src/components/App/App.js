import React from "react";
import ReactDOM from "react-dom";

import { Routes, Route, HashRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

//страницы (рендерятся в компонент Content из Layout)
import BasicPage from "../../Pages/BasicPage/BasicPage";
import MainPage from "../../Pages/MainPage/MainPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import UsersPage from "../../Pages/UsersPage/UsersPage";
import SettingsPage from "../../Pages/SettingsPage/SettingsPage";
import StatisticsPage from "../../Pages/StatisticsPage/StatisticsPage";
import NotFoundPage from "../../Pages/NotfoundPage/NotFoundPage";
import AuthPage from "../../Pages/AuthPage/AuthPage";
import EditorPage from "../../Pages/EditorPage/EditorPage";
import AdoptationPage from "../../Pages/AdoptationPage/AdoptationPage";
import AdoptationItemPage from "../../Pages/AdoptationItemPage/AdoptationItemPage";
import WorkingSpacePage from "../../Pages/WorkingSpacePage/WorkingSpacePage";
import ChatPage from "../../Pages/ChatPage/ChatPage";
//компоненты Авторизации
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import ResetPassForm from "../ResetPassForm/ResetPassForm";
//компонент layout
import AppLayout from "../Layout/Layout";

import "antd/dist/antd.css";
import "./App.less";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoute>
							<AppLayout />
						</PrivateRoute>
					}>
					<Route index element={<WorkingSpacePage />} />
					<Route
						path='working-space'
						element={<WorkingSpacePage />}
					/>
					<Route path='adoptation' element={<AdoptationPage />} />
					<Route
						path='adoptation/:id'
						element={<AdoptationItemPage />}
					/>
					<Route path='users' element={<UsersPage />} />
					<Route path='main' element={<MainPage />} />
					<Route path='statistics' element={<StatisticsPage />} />
					{/* 			<Route path='settings' element={<SettingsPage />} /> */}
					<Route path='profile' element={<ProfilePage />} />
					{/* 					<Route path='chats' element={<ChatPage />} /> */}
					{/* <Route path='editor' element={<EditorPage />} /> */}
					<Route path='*' element={<NotFoundPage />} />
				</Route>
				<Route
					path='register'
					element={
						<AuthPage>
							<RegisterForm />
						</AuthPage>
					}
				/>
				<Route
					path='reset-password'
					element={
						<AuthPage>
							{" "}
							<ResetPassForm />
						</AuthPage>
					}
				/>
				<Route
					path='login'
					element={
						<AuthPage>
							<LoginForm />
						</AuthPage>
					}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default App;
{
	/* <PrivateRoute></PrivateRoute>; */
}
