import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../../../../hooks/Hooks";
import { useMessage } from "../../../../../hooks/message.hook";
import { getDialogMessages } from "../../../../../redux/selectors/dialog-selector";
import { DialogTC, GetMessageTC } from "../../../../../redux/reducers/dialog-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
	const { loading, error, request, clearError } = useHttp();
	const message = useMessage()

	const fetchMessage = useCallback(
		() => {
			props.GetMessageTC(request)
		},
		[],
	)

	useEffect(() => {
		console.log('useEffect');
		fetchMessage()
	}, [fetchMessage])

	const formData = (formData) => {
		console.log('DialogsContainer', formData);
		props.DialogTC(formData, request);
	}

	return (
		<Dialogs {...props} onSubmit={formData} />
	)
}

let mapStateToProps = (state) => {
	return {
		messages: getDialogMessages(state)
	}
}

const DC = connect(mapStateToProps, {
	DialogTC, GetMessageTC
})(DialogsContainer)

export default DC;