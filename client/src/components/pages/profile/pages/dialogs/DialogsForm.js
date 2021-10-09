import { Field, reduxForm, reset } from "redux-form";
import { DialogInput, DialogInputFile } from "../../../../common/form-controls/form-controls";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Dialogs.scss';

const afterSubmit = (result, dispatch) => {
	dispatch(reset('login'))
}

const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className="dialogs__form">
			<div className="dialogs__formLeft">
				<Field
					name="message"
					type="text"
					placeholder="Напишите свое сообщение..."
					component={DialogInput} />
			</div>
			<div className="dialogs__formRight">
				<Field
					name="dialogsOutgoingFile"
					type="file"
					id="dialogsOutgoingFile"
					component={DialogInputFile} />
				<label htmlFor="dialogsOutgoingFile">{<AttachFileIcon />}Прикрепить файлы</label>
				<button
					className="link"
				// disabled={loading}
				>Продолжить</button>
			</div>
		</form>
	)
}

const DialogsFormRedux = reduxForm({ form: 'dialogs', onSubmitSuccess: afterSubmit })(DialogsForm)

export default DialogsFormRedux;