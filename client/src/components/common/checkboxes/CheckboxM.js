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

// type PropsType = {
// 	checkboxName: string
// 	checked: boolean
// }

const CheckboxM = ({ checkboxName, ...props }) => {
	const [state, setState] = React.useState({
		checkedG: false,
	});

	//event: React.ChangeEvent<HTMLInputElement>
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<FormGroup row >
			<FormControlLabel
				control={
					<GreenCheckbox
						checked={state.checkedG}
						onChange={handleChange}
						name="checkedG" />
				}
				label={checkboxName}
				style={{ padding: '0 0 0 10px' }}
			/>
		</FormGroup>
	);
}

export default CheckboxM