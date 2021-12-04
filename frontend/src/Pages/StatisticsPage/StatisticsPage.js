import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
//import {  } from "../../redux/actions/actions";

import "./StatisticsPage.less";

const StatisticsPage = () => {
	const dispatch = useDispatch();
	//const  stateField = useSelector(({ field }) => field.something );

	return <PageContainer></PageContainer>;
};

export default StatisticsPage;
