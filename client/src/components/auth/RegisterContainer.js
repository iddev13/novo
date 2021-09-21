import { connect } from "react-redux";
import RgisterRedux from "./Register";
import { useHttp } from '../../hooks/Hooks';
import * as axios from "axios";
import { useEffect } from "react";
import { useMessage } from "../../hooks/message.hook";

const RegisterContainerRedux = (props) => {
	const { loading, error, request, clearError } = useHttp();

	const message = useMessage()

	useEffect(() => {
		message(error);
		clearError()
	}, [error, message, clearError])

	const formData = (formData) => {
		console.log(formData);
		console.log(loading);

		const reguisterHandler = async () => {
			try {
				const data = await request('/api/auth/register', 'POST', { ...formData });
				message(data.message)
			} catch (error) { }
		}
		reguisterHandler();
	}

	return (
		<RgisterRedux {...props} onSubmit={formData} loading={loading} />
	)
}

let mapStateToProps = (state) => {
	return {}
}

const RegisterContainer = connect(mapStateToProps, {})(RegisterContainerRedux);


export default RegisterContainer;