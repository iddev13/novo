import { Field, reduxForm, reset } from "redux-form";
import { Input } from "../../../../../common/form-controls/form-controls";
import { makeStyles } from "@material-ui/core";

const afterSubmit = (result, dispatch) => {
	dispatch(reset('profileFormInfo'))
}


const useStyles = makeStyles((theme) => ({
	form: {
		maxWidth: '870px',
		width: '100%',
	},
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
	box: {
		[theme.breakpoints.between('md', 'xl')]: {
			display: 'flex',
		},
	},
	boxItem: {
		flex: '0 0 50%',
	}
}));

const ProfileFormInfo = ({ labelFor, ...props }) => {
	// debugger
	const classes = useStyles();

	return (
		<form onSubmit={props.handleSubmit} className={classes.form}>
			<div>
				<div className={classes.box}>
					<div className={classes.boxItem}>
						<label
							className={classes.label}
							htmlFor="profileFormInfoName">
							{labelFor.name}</label>
						<Field
							name="profileFormInfoName"
							type="text"
							id="profileFormInfoName"
							component={Input}
							className={classes.field}
						/>
					</div>
					<div className={classes.boxItem}>
						<label
							className={classes.label}
							htmlFor="profileFormInfoSurname">
							{labelFor.surname}</label>
						<Field
							name="profileFormInfoSurname"
							type="text"
							id="profileFormInfoSurname"
							component={Input}
							className={classes.field}
						/>
					</div>
				</div>
				<button className="link">Сохранить изменения</button>
			</div>
		</form >
	)
}

const ProfileFormInfoRedux = reduxForm({ form: 'profileFormInfo', onSubmitSuccess: afterSubmit })(ProfileFormInfo)

export default ProfileFormInfoRedux;