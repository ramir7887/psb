import React from "react";
import "./LoadingIndicator.less";
import { Spin } from "antd";
const LoadingIndicator = () => {
	return (
		<div className='loading-indicator__container'>
			<Spin className='loading-indicator' size='large' />
		</div>
	);
};

export default LoadingIndicator;
