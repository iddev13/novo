import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

	const formData = (formData) => {
		console.log(formData);

	}

	return (
		<Dialogs {...props} onSubmit={formData} />
	)
}

export default DialogsContainer;