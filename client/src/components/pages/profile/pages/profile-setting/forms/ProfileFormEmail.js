import { Field, reduxForm, reset } from "redux-form";
import { Input } from "../../../../../common/form-controls/form-controls";
import { makeStyles } from '@material-ui/core/styles';


const afterSubmit = (result, dispatch) => {
	dispatch(reset('profileFormEmail'))
}

const useStyles = makeStyles({
	label: {
		display: 'block',
		fontFamily: '"ManropeRegular", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
		color: '#8B959E',
		marginBottom: '8px',
		cursor: 'pointer'
	},
	field: {
		marginBottom: '24px'
	}
});

const ProfileFormEmail = ({ labelFor, ...props }) => {
	// debugger

	const classes = useStyles();

	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<label
					className={classes.label}
					htmlFor="profileSettingEmail">
					{labelFor}</label>
				<Field
					name="profileSettingForm"
					type="email"
					id="profileSettingEmail"
					component={Input}
					className={classes.field}
				/>
				<button className="link">Сохранить</button>
			</div>
		</form>
	)
}

const ProfileFormEmailRedux = reduxForm({ form: 'profileFormEmail', onSubmitSuccess: afterSubmit })(ProfileFormEmail)

export default ProfileFormEmailRedux;