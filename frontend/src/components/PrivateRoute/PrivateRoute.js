import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

import "./PrivateRoute.less";
const PrivateRoute = ({ children }) => {
	let location = useLocation();

	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	if (loading) {
		return <LoadingIndicator />;
	}

	if (!isAuthenticated) {
		return <Navigate to='/login' state={{ from: location }} />;
	}

	return <>{children}</>;
};

export default PrivateRoute;
