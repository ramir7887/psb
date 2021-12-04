import React from "react";
import { Layout } from "antd";

import "./AppContent.less";
const { Content } = Layout;

const AppContent = ({ children }) => {
	return (
		<>
			<Content>{children}</Content>
		</>
	);
};

export default AppContent;
