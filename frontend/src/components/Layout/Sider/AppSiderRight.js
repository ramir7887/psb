import React, { useState } from "react";
import { Layout, Image, Row, Col, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/auth-actions";
import { Link } from "react-router-dom";
import { SettingsIcon, NotificationIcon, LogOutIcon } from "../../Icon/Icon";
import AvatarImg from "./../../../assets/img/avatar.png";

import "./AppSider.less";
const { Sider } = Layout;

const AppSiderRight = () => {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		logout(dispatch);
	};
	const [collapsed, setCollapsed] = useState(false);
	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};
	const content = (
		<>
			<LogOutIcon onClick={handleLogOut}>Выйти</LogOutIcon>
		</>
	);
	return (
		<div className='sider__container'>
			<Sider
				className='sider sider__right'
				collapsible
				breakpoint='sm'
				collapsed={collapsed}
				onCollapse={onCollapse}>
				<Row
					align='middle'
					style={{
						display: "flex",
						marginTop: "10px",
						padding: "15px 0px",
					}}>
					<Col
						style={{
							display: "flex",
							justifyContent: "center",
							marginBottom: "10px",
						}}
						xs={{ span: 24 }}
						lg={collapsed ? { span: 24 } : { span: 6 }}>
						<Link to='/notifications'>
							<NotificationIcon style={{ fontSize: "24px" }} />
						</Link>
					</Col>
					<Col
						style={{
							display: "flex",
							justifyContent: "center",
							marginBottom: "10px",
							marginRight: "20px",
						}}
						xs={{ span: 24 }}
						lg={collapsed ? { span: 24 } : { span: 6 }}>
						<Link to='/settings'>
							<SettingsIcon
								style={{
									fontSize: "24px",
									textAlign: "center",
								}}
							/>
						</Link>
					</Col>
					<Col
						style={{
							display: "flex",
							justifyContent: "center",
							padding: "0 20px",
						}}
						xs={{ span: 24 }}
						lg={collapsed ? { span: 24 } : { span: 6 }}>
						<Popover
							overlayInnerStyle={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								boxShadow: "var(--box-shadow)",
							}}
							content={content}
							className='pop-over__content'>
							<Link to='/profile'>
								<Image
									preview={false}
									style={{
										width: "70px",
										backgroundColor: "#EAEEFD",
										borderRadius: "10px",
									}}
									src={AvatarImg}
								/>
							</Link>
						</Popover>
					</Col>
				</Row>
			</Sider>
		</div>
	);
};

export default AppSiderRight;
