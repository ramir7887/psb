import React from "react";
import { Alert } from "antd";
import styles from "./NotFoundPage.module.css";
const NotFoundPage = () => {
	return (
		<div className={styles.not_found}>
			<Alert
				message='Страница не найдена.'
				type='error'
				description='Уже исправляем!'
				showIcon
			/>
		</div>
	);
};

export default NotFoundPage;
