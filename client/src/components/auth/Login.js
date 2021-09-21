
import { Field, reduxForm, reset } from "redux-form";
import { Checkbox, Input } from '../common/form-controls/form-controls';
import { NavLink } from 'react-router-dom';
import './auth.scss';

const afterSubmit = (result, dispatch) => {
	dispatch(reset('login'))
}

const Login = ({ loading, ...props }) => {
	// debugger

	return (
		<section className="authForm">
			<div className="authForm__inner">
				<div className="authForm__form">
					<header className="authForm__header">
						<h2 className="authForm __title">Вход в акаунт</h2>
					</header>
					<form onSubmit={props.handleSubmit}>
						<div className="authForm__formItem">
							<label
								htmlFor="loginEmail">email</label>
							<Field
								name="email"
								type="email"
								id="loginEmail"
								component={Input} />
						</div>
						<div className="authForm__formItem">
							<label
								htmlFor="loginPassword">password</label>
							<Field
								name="password"
								type="password"
								id="loginPassword"
								component={Input} />
						</div>
						<div className="authForm__formItem authForm__formItem--checkbox">
							<Field
								name="doNotLogOut"
								id="doNotLogOut"
								component={Checkbox}
								type="checkbox"
								checked={true}
							/>
							<label htmlFor="doNotLogOut">Не выходить из системы</label>
						</div>
						<div className="authForm__formItem">
							<button
								className="link"
								disabled={loading}
							>Продолжить</button>
						</div>
					</form>
				</div>
				<footer className="authForm__footer">
					<div className="authForm__footerContent">
						<span>Нет аккаунта?</span>
						<NavLink to="/register-page">регистрация</NavLink>
					</div>
				</footer>
			</div>
		</section>
	)
}

const LoginRedux = reduxForm({ form: 'login', onSubmitSuccess: afterSubmit })(Login)

export default LoginRedux;