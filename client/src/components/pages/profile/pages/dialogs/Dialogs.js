
import { Field, reduxForm, reset } from 'redux-form';
import './Dialogs.scss';

const afterSubmit = (result, dispatch) => {
	dispatch(reset('dialogs'))
}

const Dialogs = (props) => {
	return (
		<article className="dialogs">
			dialogs
		</article>
	)
}

const DialogsRedux = reduxForm({ form: 'dialogs', onSubmitSuccess: afterSubmit })(Dialogs)

export default DialogsRedux;