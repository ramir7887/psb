import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
	MainIcon,
	CoursesIcon,
	DocsIcon,
	PeopleIcon,
	StatsIcon,
	StructureIcon,
	MessagesIcon,
} from "../../Icon/Icon";

import { Logo } from "../../Logo/Logo";
import "./AppSider.less";

const { Sider } = Layout;

const AppSiderLeft = () => {
	const [collapsed, setCollapsed] = useState(false);
	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	return (
		<div className='sider__container'>
			<Sider
				collapsible
				breakpoint='sm'
				collapsed={collapsed}
				onCollapse={onCollapse}
				className='sider'>
				<div className='sider__logo'>
					<Logo collapsed={collapsed} />
				</div>
				<Menu
					defaultSelectedKeys={["1"]}
					className='sider__menu'
					mode='inline'>
					<Menu.Item key='1' icon={<MainIcon />}>
						<Link to='/'>Главная</Link>
					</Menu.Item>
					<Menu.Item key='2' icon={<CoursesIcon />}>
						<Link to='courses'>Курсы</Link>
					</Menu.Item>
					<Menu.Item key='3' icon={<StatsIcon />}>
						<Link to='statistics'>Статистика</Link>
					</Menu.Item>
					<Menu.Item key='4' icon={<DocsIcon />}>
						<Link to='docs'>Документы</Link>
					</Menu.Item>
					<Menu.Item key='5' icon={<StructureIcon />}>
						<Link to='structure'>Структура</Link>
					</Menu.Item>
					<Menu.Item key='6' icon={<PeopleIcon />}>
						<Link to='users'>Сотрудники</Link>
					</Menu.Item>
					<Menu.Item key='7' icon={<PeopleIcon />}>
						<Link to='editor'>Редактор</Link>
					</Menu.Item>
					<Menu.Item key='8' icon={<MessagesIcon />}>
						<Link to='chats'>Сообщения</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		</div>
	);
};

export default AppSiderLeft;
