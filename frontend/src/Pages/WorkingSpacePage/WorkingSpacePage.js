import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, getUser } from "../../services/users-service";
import {
	Tabs,
	Card,
	Row,
	Col,
	Avatar,
	Typography,
	Table,
	Radio,
	Descriptions,
} from "antd";
import {
	UserOutlined,
	HomeOutlined,
	PhoneOutlined,
	MailOutlined,
} from "@ant-design/icons";
import "./WorkingSpacePage.less";
//import {  } from "../../redux/actions/actions";

const { TabPane } = Tabs;
const { Text, Title } = Typography;

function callback(key) {
	console.log(key);
}

function onChange(pagination, filters, sorter, extra) {
	console.log("params", pagination, filters, sorter, extra);
}

const columns = [
	{
		title: "ID курса",
		dataIndex: "course_id",
		filters: [
			{
				text: "1",
				value: "1",
			},
			{
				text: "1",
				value: "1",
			},
		],
		onFilter: (value, record) => record.address.startsWith(value),
		filterSearch: true,
		width: "10%",
	},
	{
		title: "Наименование курса",
		dataIndex: "course_name",
		filters: [
			{
				text: "1",
				value: "1",
			},
			{
				text: "1",
				value: "1",
				children: [
					{
						text: "Yellow",
						value: "Yellow",
					},
					{
						text: "Pink",
						value: "Pink",
					},
				],
			},
			{
				text: "Category 2",
				value: "Category 2",
				children: [
					{
						text: "Green",
						value: "Green",
					},
					{
						text: "Black",
						value: "Black",
					},
				],
			},
		],
		filterMode: "tree",
		filterSearch: true,
		onFilter: (value, record) => record.name.includes(value),
		width: "30%",
	},
	{
		title: "ID этапа",
		dataIndex: "stage_id",
		filters: [
			{
				text: "1",
				value: "1",
			},
			{
				text: "1",
				value: "1",
			},
		],
		onFilter: (value, record) => record.address.startsWith(value),
		filterSearch: true,
		width: "10%",
	},
	{
		title: "Название этапа",
		dataIndex: "stage_name",
		filters: [
			{
				text: "London",
				value: "London",
			},
			{
				text: "New York",
				value: "New York",
			},
		],
		onFilter: (value, record) => record.address.startsWith(value),
		filterSearch: true,
		width: "40%",
	},
];

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
	},
	{
		key: "4",
		name: "Jim Red",
		age: 32,
		address: "London No. 2 Lake Park",
	},
];

const WorkingSpacePage = () => {
	const dispatch = useDispatch();
	const [rows, setRows] = useState("");
	const [userData, setUserData] = useState("");
	const employee_id = localStorage.getItem("employee_id");
	useEffect(() => {
		getCourses().then((res) => {
			setRows(res);
		});
		getUser(employee_id).then((res) => {
			setUserData(res);
		});
	}, []);

	/* const [selectionType, setSelectionType] = useState("checkbox");
	//const  stateField = useSelector(({ field }) => field.something );
	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(
				`selectedRowKeys: ${selectedRowKeys}`,
				"selectedRows: ",
				selectedRows
			);
		},
	}; */

	return (
		<PageContainer>
			<Col
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#fff",
					padding: "25px",
					alignItems: "center",
				}}>
				<Row
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "50px",
					}}>
					<Col span={4}>
						<Avatar
							size={150}
							src='https://avatars.githubusercontent.com/u/37585171?v=4'
						/>
					</Col>

					<Col span={12}>
						<Title level={3}>{userData.full_name}</Title>
						<Text>{userData.position}</Text>
						<Row>
							<Text>{userData.work_place}</Text>
						</Row>
					</Col>
					<Col span={8}>
						<Row>
							<Col>
								<PhoneOutlined
									style={{ marginRight: "10px" }}
								/>
								<Text>(3812) 94-8512</Text>
								<Text>(3812) 43-8484</Text>
								<Text>(3812) 94-8512</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<PhoneOutlined
									style={{ marginRight: "10px" }}
								/>
								<Text>+7 (903) 676-8494</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<MailOutlined style={{ marginRight: "10px" }} />
								<Text>{userData.email}</Text>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row>
					<Col>
						<Tabs defaultActiveKey='1' onChange={callback}>
							<TabPane tab='Рабочий стол' key='1'>
								<Title level={2}>Рабочий стол</Title>
								<Table
									disabled
									/* rowSelection={{
										type: selectionType,
										...rowSelection,
									}} */
									columns={columns}
									dataSource={rows}
									onChange={onChange}
								/>
							</TabPane>
							<TabPane tab='Адаптация' key='2'>
								<Title level={2}>
									<Link to='/adoptation'>Адаптация</Link>
								</Title>
								<Table
									/* rowSelection={{
										type: selectionType,
										...rowSelection,
									}} */
									columns={columns}
									dataSource={rows}
									onChange={onChange}
								/>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
			</Col>
		</PageContainer>
	);
};

export default WorkingSpacePage;
