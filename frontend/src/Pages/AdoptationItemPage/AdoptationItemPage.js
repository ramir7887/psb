import React, { useEffect, useState, useRef, useCallback } from "react";
import { EDITOR_JS_TOOLS } from "./tools";
import { createReactEditorJS } from "react-editor-js";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Button } from "antd";
import PageContainer from "../../components/PageContainer/PageContainer";
import { getCourseStage } from "../../services/users-service";
import { useDispatch, useSelector } from "react-redux";
//import {  } from "../../redux/actions/actions";

import "./AdoptationItemPage.less";

const Editor = () => {
	let editorJS = useRef(null);
	const blocks = {
		time: 1635603431943,
		blocks: [
			{
				id: "12iM3lqzcm",
				type: "header",
				data: {
					text: "Пожарная безопасность",
				},
			},
			{
				id: "12iM3lqzcm",
				type: "paragraph",
				data: {
					text: "Пожарная безопасность — состояние защищённости личности, имущества, общества и государства от пожаров. Это определение повторяет аналогичные для любых видов безопасности: состояние защищенности любого объекта от любых видов опасности. Как это состояние обеспечить на практике не знает никто. Определение возникло до катастрофы в Чернобыле, когда существовала парадигма `абсолютной` безопасности.",
				},
			},
		],
	};

	const dispatch = useDispatch();
	const ReactEditorJS = createReactEditorJS();
	const [content, setContent] = useState();
	useEffect(() => {
		getCourseStage(1).then((res) => {
			const objData = res.content;
			//console.log(objData);
			setContent(objData);
		});
	}, []);
	//console.log(content);
	const onReady = () => {
		// https://editorjs.io/configuration#editor-modifications-callback
		console.log("Editor.js is ready to work!");
	};
	const onChange = () => {
		// https://editorjs.io/configuration#editor-modifications-callback
		console.log("Now I know that Editor's content changed!");
	};
	const handleInitialize = useCallback((instance) => {
		editorJS.current = instance;
	}, []);

	const handleSave = useCallback(() => {
		try {
			const savedData = editorJS.current.save().then((res) => {
				//console.log(JSON.stringify(res));
				//insertImageData(res);
			});
		} catch (e) {
			console.log("Saving failed: ", e);
		}
	}, []);

	/* 	const handleLoad = () => {
		getCourseStage(1).then((res) => {
			setContent(JSON.parse(res.content));
		});
	}; */
	//obj = content;
	//console.log("obj   ", obj.blocks);
	return (
		<Row>
			<Col span={24}>
				<ReactEditorJS
					readOnly={false}
					onInitialize={handleInitialize}
					onReady={onReady}
					onChange={onChange}
					editorInstance={(editorInstance) => {
						editorJS = editorInstance;
					}}
					defaultValue={blocks}
					tools={EDITOR_JS_TOOLS}></ReactEditorJS>
			</Col>
		</Row>
	);
};

const Test = ({ testData }) => {
	const [tests, setTests] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < testData.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<Col>
			{showScore ? (
				<div className='score-section'>
					Ты набрал {score} из {testData.questions.length}
				</div>
			) : (
				<>
					<Col className='question-section'>
						<Col className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/
							{testData.questions.length}
						</Col>
						<Col
							style={{ marginBottom: "20px" }}
							className='question-text'>
							{testData.questions[currentQuestion].name}
						</Col>
					</Col>
					<Col className='answer-section'>
						{testData.questions[currentQuestion].answers.map(
							(answer) => (
								<Col>
									<Button
										style={{ marginBottom: "20px" }}
										onClick={() =>
											handleAnswerOptionClick(
												answer.right
											)
										}>
										{answer.name}
									</Button>
								</Col>
							)
						)}
					</Col>
				</>
			)}
		</Col>
	);
};

const AdoptationItemPage = () => {
	const { Title } = Typography;
	const dispatch = useDispatch();
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const testsData = [
		{
			test_id: 1,
			test_name: "Проверка знаний по технике пожарной безопасности",
			description:
				"Предназначен для проверки усвоения материала по технике пожарной безопасности",
			create_date: "2021-12-03T00:00:00",
			questions: [
				{
					question_id: 1,
					name: "Можно ли играться с огнем в помещении?",
					test_id: 1,
					answers: [
						{
							answer_id: 3,
							question_id: 1,
							name: "Да, если начальник в отпуске, а ты нет",
							right: false,
						},
						{
							answer_id: 1,
							question_id: 1,
							name: "ДА",
							right: false,
						},
						{
							answer_id: 2,
							question_id: 1,
							name: "НЕТ",
							right: true,
						},
					],
				},
				{
					question_id: 2,
					name: "Можно ли поджигать офисную мебель и оборудование?",
					test_id: 1,
					answers: [
						{
							answer_id: 4,
							question_id: 2,
							name: "ДА",
							right: false,
						},
						{
							answer_id: 5,
							question_id: 2,
							name: "НЕТ",
							right: true,
						},
						{
							answer_id: 6,
							question_id: 2,
							name: "Да, если уже подписано заявление об увольнении",
							right: false,
						},
					],
				},
				{
					question_id: 3,
					name: "Можно ли запускать в офисе фейрверки и шутихи с коллегами в офисе в обеденный перерыв?",
					test_id: 1,
					answers: [
						{
							answer_id: 7,
							question_id: 3,
							name: "ДА",
							right: false,
						},
						{
							answer_id: 8,
							question_id: 3,
							name: "НЕТ",
							right: true,
						},
						{
							answer_id: 9,
							question_id: 3,
							name: "Да, если коллеги очень просят",
							right: false,
						},
					],
				},
			],
		},
	];
	useEffect(() => {}, [id]);
	//const  stateField = useSelector(({ field }) => field.something );

	return (
		<PageContainer>
			<Col>
				<Title level={2}>Адаптация</Title>

				<Row
					style={{
						backgroundColor: "#fff",
						padding: "25px",
						marginBottom: "40px",
					}}>
					<Col span={24} style={{ justifyContent: "center" }}>
						<Editor />
					</Col>
				</Row>
				<Col
					span={10}
					style={{ backgroundColor: "#fff", padding: "25px" }}>
					{testsData.map((test) => {
						return <Test testData={test} />;
					})}
				</Col>
			</Col>
		</PageContainer>
	);
};

export default AdoptationItemPage;
