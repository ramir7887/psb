import React from "react";
import { Layout } from "antd";
import "./AppFooter.less";
const { Footer } = Layout;

const AppFooter = () => {
	return (
		<div>
			<Footer className='layout__footer'>
				Здесь был Музан Кибуцуджи! Столпы - дураки!
			</Footer>
		</div>
	);
};

export default AppFooter;
