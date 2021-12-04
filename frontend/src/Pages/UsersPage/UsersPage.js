import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
//import {  } from "../../redux/actions/actions";
import { List, Avatar, Row, Col, Typography } from "antd";
import { getUsers } from "../../services/users-service";
import "./UsersPage.less";

const UsersPage = () => {
	const dispatch = useDispatch();
	const { Text } = Typography;
	//const  stateField = useSelector(({ field }) => field.something );
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then((res) => {
			setUsers(res);
		});
	}, []);

	return (
		<PageContainer>
			<Row style={{ display: "flex", justifyContent: "center" }}>
				<Col
					span={10}
					style={{ backgroundColor: "#fff", padding: "25px" }}>
					<List
						itemLayout='horizontal'
						dataSource={users}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026702d' />
									}
									title={<Text>{item.name}</Text>}
									description={item.email}
								/>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</PageContainer>
	);
};

export default UsersPage;
