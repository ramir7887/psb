import React, { useEffect } from "react";
import { Avatar, Image, Card, Row, Col } from "antd";
import PageContainer from "../../components/PageContainer/PageContainer";
import FormComponent from "../../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
//import {  } from "../../redux/actions/actions";
import {
	SettingOutlined,
	IdcardOutlined,
	MessageOutlined,
	UserOutlined,
	BellOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import "./ProfilePage.less";

const ProfilePage = () => {
	const dispatch = useDispatch();
	//const  stateField = useSelector(({ field }) => field.something );

	return (
		<PageContainer>
			{/* <div className='profile-page__wrapper'> */}
			<Row justify='center' gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
				<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 24 }}>
					<Card
						className='profile-page__card'
						title='Профиль'
						bordered={true}
						style={{ borderRadius: "10px" }}>
						<Avatar
							style={{
								marginBottom: 20,
							}}
							size={{
								xs: 80,
								sm: 100,
								md: 150,
								lg: 200,
								xl: 200,
								xxl: 200,
							}}
							src='https://avatars.githubusercontent.com/u/37585171?v=4'
						/>
						<FormComponent name='Рамир' />
					</Card>
				</Col>
			</Row>

			{/* </div> */}
		</PageContainer>
	);
};

export default ProfilePage;
