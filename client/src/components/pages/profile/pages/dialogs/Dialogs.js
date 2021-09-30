import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InfoIcon from '@material-ui/icons/Info';
import { Field, reduxForm, reset } from 'redux-form';
import './Dialogs.scss';
import DialogsFormRedux from './DialogsForm';

const Dialogs = (props) => {
	return (
		<article className="dialogs">
			<header className="dialogs__header">
				<a className="linkSM" href="/">Все сообщения</a>
				<div className="dialogs__companion">Игорь Игорьевич</div>
			</header>
			<section className="dialogs__body">
				<ul className="dialogs__list">
					<li className={`dialogs__item dialogs__outgoing`}>
						<div className="dialogs__outgoingMessages">
							<span className="dialogs__text">Привет, как у тебя дела?</span>
							{/* <div className="dialogs__resIcon">
								<DoneAllIcon />
							</div> */}
							<p>
								<span className="dialogs__itemTime">14:59</span>
							</p>
						</div>

					</li>
					<li className={`dialogs__item dialogs__incoming`}>
						<div className="dialogs__incomingMessages">
							<span className="dialogs__text">Привет, у меня все ок, а у тебя?</span>
							{/* <div className="dialogs__resIcon">
								<DoneAllIcon />
							</div> */}
							<p>
								<span className="dialogs__itemTime">15:00</span>
							</p>
						</div>
					</li>

				</ul>
			</section>
			<footer className="dialogs__footer">
				<DialogsFormRedux {...props} onSubmit={props.onSubmit} />
			</footer>
		</article>
	)
}

export default Dialogs;