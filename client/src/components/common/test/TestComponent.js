import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAuthIsAuthenticated } from "../../../redux/selectors/auth-selector";


const TestComponent = ({ token }) => {
	// debugger
	// const date = Math.floor(Date.now() / 1000 / 60 / 60) // hour
	const date = Math.floor(Date.now() / 1000) // seconds
	const hour = 3600

	return (
		<section>
			<div className="container">
				<div className="test">
					Date: {date}
				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state) => {
	return {
		token: getAuthIsAuthenticated(state)
	}
}

const TestComponentContainer = connect(mapStateToProps, {})(TestComponent)

export default TestComponentContainer;
