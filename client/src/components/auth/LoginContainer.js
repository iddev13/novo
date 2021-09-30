import { connect } from "react-redux";
import { useEffect } from "react";
import { useHttp } from '../../hooks/Hooks';
import { useMessage } from "../../hooks/message.hook";
import { getAuthIsAuthenticated, getAuthLoginText } from "../../redux/selectors/auth-selector";
import { loginAuth, LoginTC, cleanLoginMessage } from '../../redux/reducers/auth-reducer';
import { useAuth } from "../../hooks/auth.hook";
import LoginRedux from "./Login";
import AlertSuccess from "../common/alerts/AlertSuccess";
import AlertError from "../common/alerts/AlertError";
import { Redirect } from "react-router";

const LoginContainerRedux = ({ isAuthenticated, ...props }) => {
	const { loading, error, request, clearError } = useHttp();
	const { token, login, logout, userId } = useAuth()

	const message = useMessage()

	useEffect(() => {
		// if (error !== null) alert(error)
		// if (props.isAuthText !== '') alert(props.isAuthText)
		setTimeout(() => {
			clearError()
			props.cleanLoginMessage()
		}, 3000);
		return () => {
		}
	}, [error, message, clearError, props.cleanLoginMessage])

	const formData = (formData) => {
		console.log(formData);
		props.LoginTC(formData, request);
	}

	if (isAuthenticated) return <Redirect to="/" />

	return (
		<>
			{error !== null ? <AlertError>{error}</AlertError> : null}
			{props.isAuthText !== '' ? <AlertSuccess>{props.isAuthText}</AlertSuccess> : null}
			<LoginRedux {...props} onSubmit={formData} loading={loading} />
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		isAuthenticated: getAuthIsAuthenticated(state),
		isAuthText: getAuthLoginText(state),
	}
}

const LoginContainer = connect(mapStateToProps, {
	loginAuth, LoginTC, cleanLoginMessage
})(LoginContainerRedux);


export default LoginContainer;