import { connect } from "react-redux";
import { getNewMessagesAmount } from "../../../../../redux/selectors/dialog-selector";
import Message from "./Message";

let mapStateToProps = (state) => {
	return {}
}

const MessageContainer = connect(mapStateToProps, {})(Message)

export default MessageContainer;