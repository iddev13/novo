import { connect } from "react-redux";
import { getHeaderNavActiveTab } from "../../../redux/selectors/headerNav-selector";
import { actionsHeaderNav } from '../../../redux/reducers/headerNav-reducer'
import Profile from "./Profile";
import { getNewMessagesAmount } from "../../../redux/selectors/dialog-selector";
import { AppStateType } from "../../../redux/store";

type MapStateToPropsType = {
	activeTab: number
	messageAmount: number
}
type MapDispatchToPropsType = {
	getA11yProps: (index: number) => void
	tabHandleChange: (index: number) => void
}
type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		activeTab: getHeaderNavActiveTab(state),
		messageAmount: getNewMessagesAmount(state)
	}
}

const ProfileContainer = connect(mapStateToProps, {
	getA11yProps: actionsHeaderNav.getA11yProps,
	tabHandleChange: actionsHeaderNav.tabHandleChange
})(Profile)

export default ProfileContainer;