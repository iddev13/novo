// import DoneIcon from '@material-ui/icons/Done';
// import DoneAllIcon from '@material-ui/icons/DoneAll';
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// import InfoIcon from '@material-ui/icons/Info';
import './Dialogs.scss';
import DialogsFormRedux from './DialogsForm';

const Dialogs = ({ messages, ...props }) => {
	let dialogsList = messages.map(elem => {
		return <li className={`dialogs__item dialogs__outgoing`} key={elem._id}>
			<div className="dialogs__outgoingMessages">
				<span className="dialogs__text">{elem.message}</span>
				<p>
					<span className="dialogs__itemTime">{elem.date}</span>
				</p>
			</div>

		</li>
	})

	return (
		<article className="dialogs">
			<header className="dialogs__header">
				<a className="linkSM" href="/">Все сообщения</a>
				<div className="dialogs__companion">Игорь Игорьевич</div>
			</header>
			<section className="dialogs__body">
				<ul className="dialogs__list">{dialogsList}
					<li className={`dialogs__item dialogs__incoming`}>
						<div className="dialogs__incomingMessages">
							<span className="dialogs__text">Привет, у меня все ок, а у тебя?</span>
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