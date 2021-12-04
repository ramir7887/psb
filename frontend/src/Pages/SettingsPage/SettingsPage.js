import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
//import {  } from "../../redux/actions/actions";

import "./SettingsPage.less";

const SettingsPage = () => {
	const dispatch = useDispatch();
	//const  stateField = useSelector(({ field }) => field.something );

	return (
		<PageContainer>
			<Row justify='center' gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
				<Col className='gutter-row' xs={{ span: 24 }}>
					<Card
						style={{ borderRadius: "10px" }}
						title='Настройки'
						bordered={true}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
		</PageContainer>
	);
};

export default SettingsPage;
