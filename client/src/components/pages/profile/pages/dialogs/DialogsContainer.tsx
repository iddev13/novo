import { FC, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../../../../hooks/Hooks";
import { getDialogMessages } from "../../../../../redux/selectors/dialog-selector";
import { DialogMessageType, DialogTC, GetMessageTC } from "../../../../../redux/reducers/dialog-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../../../../redux/store";

type MapStateToPropsType = {
	messages: Array<DialogMessageType>
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type DialogContainerPropsType = {
	messages: Array<DialogMessageType>
	GetMessageTC: (request: any) => void
	DialogTC: (formData: any, request: any) => void
}

const DialogsContainer: FC<DialogContainerPropsType> = (props) => {
	const { request } = useHttp();

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

	const formData = (formData: any) => {
		console.log('DialogsContainer', formData);
		props.DialogTC(formData, request);
	}

	return (
		<Dialogs {...props} onSubmit={formData} />
	)
}

let mapStateToProps = (state: AppStateType): PropsType => {
	return {
		messages: getDialogMessages(state)
	}
}

// DC - DialogContainerWrapper
const DC = connect(mapStateToProps, {
	DialogTC, GetMessageTC
})(DialogsContainer)

export default DC;