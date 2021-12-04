import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
	Chat,
	Channel,
	ChannelHeader,
	ChannelList,
	LoadingIndicator,
	MessageInput,
	MessageList,
	Thread,
	Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const userToken =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFsbGluZy1ibG9jay04In0.xuxjmc-OI9OA-wjGMY6qSgdxDNw932PFFmtI6wdWmpM";

const filters = { type: "messaging", members: { $in: ["falling-block-8"] } };
const sort = { last_message_at: -1 };

const ChatComponent = () => {
	const [chatClient, setChatClient] = useState(null);

	useEffect(() => {
		const initChat = async () => {
			const client = StreamChat.getInstance("qbtyyqhnrcdm");

			await client.connectUser(
				{
					id: "falling-block-8",
					name: "falling-block-8",
					image: "https://getstream.io/random_png/?id=falling-block-8&name=falling-block-8",
				},
				userToken
			);

			setChatClient(client);
		};

		initChat();
	}, []);

	if (!chatClient) {
		return <LoadingIndicator />;
	}

	return (
		<Chat client={chatClient} theme='messaging light'>
			<ChannelList filters={filters} sort={sort} />
			<Channel>
				<Window>
					<ChannelHeader />
					<MessageList />
					<MessageInput />
				</Window>
				<Thread />
			</Channel>
		</Chat>
	);
};

export default ChatComponent;
