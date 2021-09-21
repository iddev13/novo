import { connect } from "react-redux";
import LoginRedux from "./Login";
import { useHttp } from '../../hooks/Hooks';
import * as axios from "axios";
import { useEffect } from "react";
import { useMessage } from "../../hooks/message.hook";
import { getAuthIsAuthenticated, getAuthLogin, getAuthLogout, getAuthToken, getAuthUserId } from "../../redux/selectors/auth-selector";
import { loginAuth } from '../../redux/reducers/auth-reducer';
import { useAuth } from "../../hooks/auth.hook";

const LoginContainerRedux = ({ isAuthenticated, ...props }) => {

	// debugger

	const { loading, error, request, clearError } = useHttp();

	const { token, login, logout, userId } = useAuth()

	const message = useMessage()

	useEffect(() => {
		message(error);
		clearError()
	}, [error, message, clearError])

	const formData = (formData) => {
		console.log(formData);
		console.log(loading);

		const loginHandler = async () => {
			try {
				const data = await request('/api/auth/login', 'POST', { ...formData });
				// login(data.token, data.userId)
				props.loginAuth(data.token, data.userId)
			} catch (error) { }
		}
		loginHandler();
	}

	return (
		<LoginRedux {...props} onSubmit={formData} loading={loading} />
	)
}

let mapStateToProps = (state) => {
	return {
		// token: getAuthToken(state),
		// userId: getAuthUserId(state),
		// login: getAuthLogin(state),
		// logout: getAuthLogout(state),
		isAuthenticated: getAuthIsAuthenticated(state),
	}
}

const LoginContainer = connect(mapStateToProps, {
	loginAuth
})(LoginContainerRedux);


export default LoginContainer;