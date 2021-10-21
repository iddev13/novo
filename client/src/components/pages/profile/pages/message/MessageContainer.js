import { connect } from "react-redux";
import Message from "./Message";

let mapStateToProps = (state) => {
	return {}
}

const MessageContainer = connect(mapStateToProps, {})(Message)

export default MessageContainer;