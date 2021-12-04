import React from "react";
import "./PageContainer.less";

const PageContainer = ({ children }, ...props) => {
	return (
		<div className='page__container' {...props}>
			{children}
		</div>
	);
};

export default PageContainer;
