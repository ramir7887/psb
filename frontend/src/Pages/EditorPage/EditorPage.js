/* import React, { useEffect, useRef, useCallback, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Button, Card, Typography, Row, Col } from "antd";
//import { EDITOR_JS_TOOLS } from "../AdoptationItemPage/tools";
import { createReactEditorJS } from "react-editor-js";
import { useDispatch, useSelector } from "react-redux";
//import {  } from "../../redux/actions/actions";
import { insertImageData } from "../../services/auth-service";
import "./EditorPage.less";
const { Text, Title } = Typography;
const blocks = {
	time: 1635603431943,
	blocks: [
		{
			id: "12iM3lqzcm",
			type: "header",
			data: {
				text: "Введение",
			},
		},
		{
			id: "12iM3lqzcm",
			type: "paragraph",
			data: {
				text: "Чтобы продолжить, кликните под этим предложением. ",
			},
		},
	],
};

const EditorPage = () => {
	let editorJS = useRef(null);
	let obj = {};
	const dispatch = useDispatch();
	const ReactEditorJS = createReactEditorJS();
	const [content, setContent] = useState({});
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
				insertImageData(res);
			});
		} catch (e) {
			console.log("Saving failed: ", e);
		}
	}, []);
	obj = content;
	console.log("obj   ", obj.blocks);
	return (
		<PageContainer>
			<Card style={{ borderRadius: "10px", marginBottom: "30px" }}>
				<Title style={{ color: "var(--dark-grey)" }} level={3}>
					Добро пожаловать в Редактор контента!{" "}
				</Title>
				<Text type='secondary' style={{ color: "var(--dark-grey)" }}>
					Здесь ментор может составить обучающий материал по проекту и
					назначить его командам для дальнейшего прохождения.
				</Text>
			</Card>

			<Card style={{ borderRadius: "10px" }}>
				<ReactEditorJS
					onInitialize={handleInitialize}
					onReady={onReady}
					onChange={onChange}
					editorInstance={(editorInstance) => {
						editorJS = editorInstance;
					}}
					defaultValue={blocks}
					tools={EDITOR_JS_TOOLS}></ReactEditorJS>
				<Button type='primary' onClick={handleSave}>
					Сохранить
				</Button>
			</Card>
		</PageContainer>
	);
};

export default EditorPage;
 */
