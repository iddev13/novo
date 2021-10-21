import { connect } from "react-redux";
import { getHeaderNavActiveTab } from "../../../redux/selectors/headerNav-selector";
import { actions } from '../../../redux/reducers/headerNav-reducer'
import Profile from "./Profile";
import { getNewMessagesAmount } from "../../../redux/selectors/dialog-selector";
import { AppStateType } from "../../../redux/store";

type MapStateToProps = {
	activeTab: number,
	messageAmount: number
}
type MapDispatchToProps = {
	getA11yProps: (index: number) => void,
	tabHandleChange: (index: number) => void
}
type OwnProps = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

let mapStateToProps = (state: AppStateType): MapStateToProps => {
	return {
		activeTab: getHeaderNavActiveTab(state),
		messageAmount: getNewMessagesAmount(state)
	}
}

const ProfileContainer = connect(mapStateToProps, {
	getA11yProps: actions.getA11yProps,
	tabHandleChange: actions.tabHandleChange
})(Profile)

export default ProfileContainer;