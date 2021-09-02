import { Field, reduxForm, reset } from "redux-form";
import { Input } from "../../../../../common/form-controls/form-controls";
import { makeStyles } from '@material-ui/core/styles';


const afterSubmit = (result, dispatch) => {
	dispatch(reset('profileFormPassword'))
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
	},
	link: {
		display: 'inline-block',
		fontFamily: '"ManropeSemiBold", sans-serif',
		fontSize: '14px',
		lineHeight: '24px',
		color: '#009661',
		marginLeft: '32px'
	}
});

const ProfileFormPassword = ({ labelFor, ...props }) => {
	// debugger

	const classes = useStyles();

	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<label
					className={classes.label}
					htmlFor="profileSettingPassword">
					{labelFor}</label>
				<Field
					name="profileSettingForm"
					type="password"
					id="profileSettingPassword"
					component={Input}
					className={classes.field}
				/>
				<div>
					<button className="link">Сохранить</button>
					<a href="/" className={classes.link}>Забыли пароль?</a>
				</div>
			</div>
		</form>
	)
}

const ProfileFormPasswordRedux = reduxForm({ form: 'profileFormPassword', onSubmitSuccess: afterSubmit })(ProfileFormPassword)

export default ProfileFormPasswordRedux;