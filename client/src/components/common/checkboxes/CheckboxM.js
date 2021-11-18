import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

const CheckboxM = ({ checkboxName, setSortItem, removeSortItem, selectName, check, onChangeCheckbox, checkboxCategory, category, ...props }) => {
	// debugger
	const handleChange = (event) => {
		!check
			? setSortItem(category, selectName, event.target.value)
			: removeSortItem(category, event.target.value)

		onChangeCheckbox(checkboxCategory, checkboxName)
		console.log(checkboxCategory, checkboxName);
	};

	return (
		<FormGroup row >
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={check}
						onChange={handleChange}
						name={checkboxName}
						value={checkboxName} />
				}
				label={checkboxName}
				style={{ padding: '0 0 0 10px' }}
			/>
		</FormGroup>
	);
}

export default CheckboxM