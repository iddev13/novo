import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import WithPlusSelect from "../selects/with-plus/WithPlusSelect";
import { actionsSearchResult } from "../../../redux/reducers/searchResult-reduser";


const TestComponent = () => {
	// debugger
	const GreenCheckbox = withStyles({
		root: {
			color: green[400],
			'&$checked': {
				color: green[600],
			},
			'& .MuiSvgIcon-root': {
				fill: '#009661'
			}
		},
		checked: {}
	})((props) => <Checkbox color="default" {...props} />);


	return (
		<section>
			<div className="container">
				<div className="test">
					TestComponent
					<WithPlusSelect
						selected="Производитель">
					</WithPlusSelect>
				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state) => {
	return {}
}

const TestComponentContainer = connect(mapStateToProps, {
	onChangeCheckbox: actionsSearchResult.onChangeCheckbox
})(TestComponent)

export default TestComponentContainer;
