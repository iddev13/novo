import DialogsContainer from '../dialogs/DialogsContainer';
import './Message.scss';
import MessageTable from './MessageTable';

const Message = ({ ...props }) => {
	return (
		<section>
			<div className="container">
				<MessageTable />
				<DialogsContainer />
			</div>
		</section>
	)
}

export default Message;