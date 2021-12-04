import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
	state = {
		hasError: false,
		error: null,
	};
	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	/* 	componentDidCatch() {
		this.setState({
			hasError: true,
		});
	} */

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator errorMsg={this.state.error.message} />;
		}
		return this.props.children;
	}
}
