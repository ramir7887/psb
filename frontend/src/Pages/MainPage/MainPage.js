import React, { useEffect } from "react";
import { Row, Col, Typography, Image, Card, Progress } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users-actions";
import PageContainer from "../../components/PageContainer/PageContainer";
import LoadingIndicator from "../../components/loading-indicator/LoadingIndicator";
import WavingHand from "./../../assets/img/image_296.png";
import { MoreIcon, ClipBoardIcon } from "../../components/Icon/Icon";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

import { Pie } from "react-chartjs-2";
import "./MainPage.less";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	ArcElement,
	Tooltip,
	Legend
);

const data = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

const options = {
	maintainAspectRatio: false,
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Статистика",
		},
	},
};
const MainPage = () => {
	const { Title, Text } = Typography;
	const name = "Рамир";
	const dispatch = useDispatch();
	//const users = useSelector(({ appUsers }) => appUsers.users);
	//useEffect(fetchUsers(dispatch), []);

	//const loading = useSelector(({ appUsers }) => appUsers.loading);

	return (
		<PageContainer>
			<Col style={{ backgroundColor: "#fff", padding: "24px" }}>
				<Row
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "25px",
					}}>
					<Col>
						<Title
							style={{
								color: "var(--light-grey)",
								fontWeight: "light",
							}}
							level={4}>
							{`Привет, ${name}`}{" "}
							<Image
								preview='false'
								style={{ height: "20px" }}
								src={WavingHand}
							/>
						</Title>
					</Col>
					<Col>
						<Title
							style={{
								color: "var(--dark-grey)",
							}}
							level={2}>
							Твой план на сегодня:
						</Title>
					</Col>
				</Row>
				<Row style={{ marginBottom: "44px" }}>
					<Card
						bordered={false}
						style={{
							width: "100%",
							padding: "4px 25px",
							backgroundColor: "#5355ED",
							borderRadius: "10px",
							color: "var(--background-white)",
						}}>
						<Row
							style={{
								display: "flex",
							}}>
							<Row
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}>
								<Col
									style={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Text
										strong
										style={{
											textAlign: "left",
											fontSize: "36px",
											color: "var(--background-white)",
											marginBottom: "18px",
										}}>
										Добавлен новый урок
									</Text>
									<Text
										style={{
											color: "var(--background-white)",
											lineHeight: "20px",
											maxWidth: "55%",
										}}>
										Наша компания постоянно растет и
										меняется, сегодня мы добавили новые
										правила, ознакомься, пожалуйста!
									</Text>
									<Link
										style={{
											alignSelf: "end",
											padding: "10px 39px",
											backgroundColor:
												"var(--background-white)",
											borderRadius: "10px",
										}}
										to='working-space'>
										<Text
											style={{
												cursor: "pointer",
												color: "#5355ED",
											}}>
											Начать
										</Text>
									</Link>
								</Col>
							</Row>
						</Row>
					</Card>
				</Row>

				<Row
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "40px",
					}}>
					<Col>
						<Card
							extra={<MoreIcon />}
							title={
								<Text style={{ fontSize: "24px" }}>
									Статистика
								</Text>
							}
							bordered={false}
							style={{
								borderRadius: "10px",
								marginBottom: "15px",
							}}>
							<Bar
								width={500}
								height={400}
								options={options}
								data={data}
							/>
						</Card>
					</Col>
					<Col>
						<Card
							extra={<MoreIcon />}
							title={
								<Text style={{ fontSize: "24px" }}>Урок</Text>
							}
							bordered={false}
							style={{ borderRadius: "10px" }}>
							<Pie
								width={500}
								height={400}
								options={{ maintainAspectRatio: false }}
								data={data}
							/>
						</Card>
					</Col>
				</Row>
				<Row
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "40px",
					}}>
					<Col style={{ marginBottom: "12px" }}>
						<Text style={{ fontSize: "24px" }}>Документация</Text>
						<Card
							bordered={false}
							style={{
								borderRadius: "10px",
								marginBottom: "12px",
								marginTop: "15px",
							}}>
							<Row>
								<Col>
									<ClipBoardIcon
										style={{
											padding: "16px",
											backgroundColor: "#F3E4FF",
											borderRadius: "10px",
											marginRight: "10px",
										}}
									/>
									<Text style={{ fontSize: "16px" }}>
										Submisson NLP Programming
									</Text>
								</Col>
							</Row>
						</Card>
						<Card bordered={false} style={{ borderRadius: "10px" }}>
							<Row>
								<Col>
									<ClipBoardIcon
										style={{
											padding: "16px",
											backgroundColor: "#F3E4FF",
											borderRadius: "10px",
											marginRight: "10px",
										}}
									/>
									<Text
										style={{
											fontSize: "16px",
											marginBottom: "15px",
										}}>
										Submisson NLP Programming
									</Text>
								</Col>
							</Row>
						</Card>
					</Col>
					<Col>
						<Text style={{ fontSize: "24px" }}>
							Прогресс изучения
						</Text>
						<Card
							bordered={false}
							style={{
								borderRadius: "10px",
								marginTop: "15px",
							}}>
							<>
								<Progress percent={30} />
								<Progress percent={50} status='active' />
								<Progress percent={70} status='exception' />
								<Progress percent={100} />
								<Progress percent={50} showInfo={false} />
							</>
						</Card>
					</Col>
				</Row>
			</Col>
		</PageContainer>
	);
};

export default MainPage;
