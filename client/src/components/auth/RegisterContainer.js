import { connect } from "react-redux";
import RgisterRedux from "./Register";
import { useHttp } from '../../hooks/Hooks';
import { useEffect } from "react";
import { useMessage } from "../../hooks/message.hook";
import { RegisterTC } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router";
import { getAuthIsAuthenticated, getAuthLoginText } from "../../redux/selectors/auth-selector";
import AlertError from "../common/alerts/AlertError";

const RegisterContainerRedux = ({ isAuthenticated, ...props }) => {
	const { loading, error, request, clearError } = useHttp();

	const message = useMessage()

	useEffect(() => {
		setTimeout(() => {
			clearError()
		}, 3000);
		return () => {
		}
	}, [error, message, clearError])

	const formData = (formData) => {
		console.log(formData);
		props.RegisterTC(formData, request);
	}

	if (isAuthenticated) return <Redirect to="/" />
	if (props.isAuthText === 'Пользователь создан') return <Redirect to="/login-page" />
	return (
		<>
			{error !== null ? <AlertError>{error}</AlertError> : null}
			<RgisterRedux {...props} onSubmit={formData} loading={loading} />
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		isAuthenticated: getAuthIsAuthenticated(state),
		isAuthText: getAuthLoginText(state)
	}
}

const RegisterContainer = connect(mapStateToProps, {
	RegisterTC,
})(RegisterContainerRedux);


export default RegisterContainer;