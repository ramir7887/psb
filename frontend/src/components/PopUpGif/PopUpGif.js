import { Card, Col } from "antd";
import React from "react";
import "./PopUpGif.less";

const PopUpGif = ({ gif }) => {
	return (
		<Col>
			<iframe
				src={gif}
				width='300'
				height='300'
				frameBorder='0'
				class='giphy-embed'
				allowFullScreen></iframe>
		</Col>
	);
};

export default PopUpGif;
