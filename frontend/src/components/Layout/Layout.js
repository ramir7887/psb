import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AppSiderLeft from "./Sider/AppSiderLeft";
import AppSiderRight from "./Sider/AppSiderRight";
import AppHeader from "./Header/AppHeader";
import AppContent from "./Content/AppContent";

//import AppFooter from "./Footer/AppFooter"; //компонент есть, но не встроен в layout

const AppLayout = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const goForward = () => navigate(1);
	return (
		<div>
			<Helmet>
				<title>Hackathon App</title>
				<meta name='description' content='hackathon app page' />
			</Helmet>
			<Layout style={{ minHeight: "100vh", minWidth: "100%" }}>
				<AppHeader />
				<Row style={{ display: "flex" }}>
					<Col>
						<LeftOutlined
							style={{ marginTop: "100px", marginRight: "50px" }}
							onClick={goBack}
						/>
						<RightOutlined onClick={goForward} />
					</Col>
				</Row>

				<Layout className='site-layout'>
					<AppContent>
						<Outlet />
					</AppContent>
				</Layout>
			</Layout>
		</div>
	);
};

export default AppLayout;

{
	/* <AppSiderLeft /> */
}
{
	/* <AppSiderRight /> */
}
