import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import ChatComponent from "../../components/Chat/Chat";
//import {  } from "../../redux/actions/actions";

import "./ChatPage.less";

const ChatPage = () => {
	const dispatch = useDispatch();
	//const  stateField = useSelector(({ field }) => field.something );

	return (
		<PageContainer>
			<ChatComponent />
		</PageContainer>
	);
};

export default ChatPage;
