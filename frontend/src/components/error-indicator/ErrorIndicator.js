import React from "react";
import { Alert } from "antd";
import "./ErrorIndicator.less";
const ErrorIndicator = ({ errorMsg }) => {
	return (
		<div className='error_indicator'>
			<div>
				<Alert
					message='Произошла ошибка. Уже исправляем!'
					type='error'
					description={errorMsg}
					showIcon
				/>
			</div>
		</div>
	);
};
export default ErrorIndicator;
