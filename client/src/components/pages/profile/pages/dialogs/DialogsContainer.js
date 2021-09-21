import DialogsRedux from "./Dialogs";


const DialogsContainer = (props) => {

	const formData = (formData) => {
		console.log(formData);

		// const loginHandler = async () => {
		// 	try {
		// 		const data = await request('/api/auth/login', 'POST', { ...formData });
		// 		// login(data.token, data.userId)
		// 		props.loginAuth(data.token, data.userId)
		// 	} catch (error) { }
		// }
		// loginHandler();
	}

	return (
		<DialogsRedux {...props} onSubmit={formData} />
	)
}

export default DialogsContainer;