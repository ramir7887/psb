import React from "react";
import { Layout, Button, Avatar, Image, Popover, Menu, Row, Col } from "antd";
import "./AppHeader.less";
import { LoginOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/auth-actions";
import { Link } from "react-router-dom";
import { LogOutIcon } from "../../Icon/Icon";
import {
	SettingOutlined,
	IdcardOutlined,
	MessageOutlined,
	UserOutlined,
	BellOutlined,
	SearchOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		logout(dispatch);
	};
	const content = (
		<>
			<LogOutIcon onClick={handleLogOut}>Выйти</LogOutIcon>
		</>
	);
	return (
		<div className='layout__header'>
			<Header
				style={{
					position: "fixed",
					backgroundColor: "#fff",
					zIndex: 10,
					width: "100%",
				}}>
				<Row
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Col span={3}>
						<Link to='/'>Ньютон</Link>
					</Col>
					<Col span={10}>
						<Menu
							mode='horizontal' /* defaultSelectedKeys={["1"]} */
						>
							<Menu.Item key='1'>
								<Link to='main'>О Банке</Link>
							</Menu.Item>
							<Menu.Item key='2'>
								<Link to='users'>Коллеги</Link>
							</Menu.Item>
							<Menu.Item key='3'>
								<Link to='statistics'>Базы знаний</Link>
							</Menu.Item>
						</Menu>
					</Col>
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
							<Avatar src='https://avatars.githubusercontent.com/u/37585171?v=4' />
						</Link>
					</Popover>

					<Col style={{ display: "flex" }}>
						<MessageOutlined
							style={{ fontSize: "24px", marginRight: "20px" }}
						/>
						<SearchOutlined style={{ fontSize: "24px" }} />
					</Col>
				</Row>
			</Header>
		</div>
	);
};

export default AppHeader;

/* const content = (
	<>
		<Menu>
			<Menu.Item key='20' icon={<IdcardOutlined />}>
				<Link to='/profile'> Профиль </Link>
			</Menu.Item>

			<Menu.Item key='21' icon={<SettingOutlined />}>
				<Link to='/settings'> Настройки </Link>
			</Menu.Item>
		</Menu>
		<Button onClick={handleLogOut} className='header__btn'>
			<LoginOutlined />
			Выйти
		</Button>
	</>
); */

{
	/* 			<Header className='site-layout-background'>
				<Avatar
					className='header__avatar'
					style={{ border: "2px solid #000" }}
					src={
						<Image
							src='https://sun9-85.userapi.com/impf/xBmmyWqkTY52l66P4vWYGsTakORTY6jGcJ5FHQ/s9hMMzVH-s0.jpg?size=1543x2076&quality=96&sign=b2c4c5f3221e6a7b6ce802bef2199ca2&type=album'
							style={{ width: 32 }}
						/>
					}
				/>
				<Popover
					overlayInnerStyle={{
						width: "300px",
						height: "300px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						boxShadow: "var(--box-shadow)",
					}}
					content={content}
					className='pop-over__content'>
					Личный кабинет
				</Popover>
			</Header> */
}
