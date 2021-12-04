import React, { useEffect, useState } from "react";
import { Card, Typography, Steps, Checkbox, Row, Col } from "antd";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../services/users-service";
//import {  } from "../../redux/actions/actions";

import "./AdoptationPage.less";
import PopUpGif from "../../components/PopUpGif/PopUpGif";

const AdoptationPage = () => {
	const dispatch = useDispatch();
	const [items, setItems] = useState([]);
	//const  stateField = useSelector(({ field }) => field.something );
	const { Title, Text } = Typography;
	const { Step } = Steps;
	function onChange(e) {
		console.log(`checked = ${e.target.checked}`);
	}
	/* 	const obj = [
		{ id: "123", text: "Оформиться на работу" },
		{ id: "12", text: "Получить постоянный пропуск" },
	]; */
	useEffect(() => {
		getCourses().then((res) => {
			console.log(res);
			setItems(res);
		});
		//
	}, []);
	return (
		<PageContainer>
			<Title level={2}>Адаптация</Title>
			<Col
				style={{
					marginBottom: "40px",
					backgroundColor: "#FFF",
					padding: "25px",
				}}>
				<Steps current={1}>
					<Step
						title='Finished'
						description='This is a description.'
					/>
					<Step
						title='In Progress'
						subTitle='Left 00:00:08'
						description='This is a description.'
					/>
					<Step
						title='Waiting'
						description='This is a description.'
					/>
				</Steps>
			</Col>

			<Col
				style={{
					backgroundColor: "#FFF",
					padding: "15px",
				}}>
				<Col span={16}>
					{items.map((item) => {
						return (
							<Link key={item.stage_id} to={`${item.stage_id}`}>
								{/* 	<PopUpGif gif='https://giphy.com/embed/eh7W3dJGvRa4FymAPf' /> */}
								<Row
									style={{
										display: "flex",
										backgroundColor: "#F5F6F7",
										padding: "15px",
										marginBottom: "5px",
									}}>
									<Col>
										<Checkbox
											//defaultChecked
											checked={
												item.complited === "False"
													? false
													: true
											}
											disabled
											onChange={onChange}>
											<Text>{item.stage_name}</Text>
										</Checkbox>
									</Col>
								</Row>
							</Link>
						);
					})}
				</Col>
			</Col>
		</PageContainer>
	);
};

export default AdoptationPage;
