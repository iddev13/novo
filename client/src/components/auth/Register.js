
import './auth.scss';
import { Field, reduxForm, reset } from "redux-form";
import { Checkbox, Input } from '../common/form-controls/form-controls';
import { NavLink } from 'react-router-dom';

const afterSubmit = (result, dispatch) => {
	dispatch(reset('register'))
}

const Register = ({ loading, ...props }) => {
	// debugger

	return (
		<section className="authForm">
			<div className="authForm__inner">
				<div className="authForm__form">
					<header className="authForm__header">
						<h2 className="authForm __title">Регистрация</h2>
					</header>
					<form onSubmit={props.handleSubmit}>
						<div className="authForm__formItem">
							<label
								htmlFor="registerName">имя</label>
							<Field
								name="name"
								type="text"
								id="registerName"
								component={Input} />
						</div>
						<div className="authForm__formItem">
							<label
								htmlFor="registerSurname">фамилия</label>
							<Field
								name="surname"
								type="text"
								id="registerSurname"
								component={Input} />
						</div>
						<div className="authForm__formItem">
							<label
								htmlFor="registerEmail">email</label>
							<Field
								name="email"
								type="email"
								id="registerEmail"
								component={Input} />
						</div>
						<div className="authForm__formItem">
							<label
								htmlFor="registerPassword">password</label>
							<Field
								name="password"
								type="password"
								id="registerPassword"
								component={Input} />
						</div>
						<div className="authForm__formItem authForm__formItem--checkbox">
							<Field
								name="TermsOfUse"
								component={Checkbox}
								type="checkbox"
								checked={true}
							/>
							<label htmlFor="doNotLogOut">
								Авторизуясь, Вы принимаете <span>Условия использования</span> и <span>Заявлением о конфиденциальности NOVO</span></label>
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
						<span>Уже есть акаунт?</span>
						<NavLink to="/login-page">Войти</NavLink>
					</div>
				</footer>
			</div>
		</section>
	)
}

const RegisterRedux = reduxForm({ form: 'register', onSubmitSuccess: afterSubmit })(Register)

export default RegisterRedux;