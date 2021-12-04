import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import middleware from "./redux/middleware";

import ErrorBoundry from "./components/error-boundry";
import App from "./components/App/App";

import "./index.css";

const store = createStore(reducer, middleware);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundry>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ErrorBoundry>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
