import { connect } from "react-redux";
import { getHeaderNavActiveTab } from "../../../redux/selectors/headerNav-selector";
import { getA11yProps, tabHandleChange } from '../../../redux/reducers/headerNav-reducer'
import Profile from "./Profile";
import { getNewMessagesAmount } from "../../../redux/selectors/dialog-selector";

let mapStateToProps = (state) => {
	return {
		activeTab: getHeaderNavActiveTab(state),
		messageAmount: getNewMessagesAmount(state)
	}
}

const ProfileContainer = connect(mapStateToProps, {
	getA11yProps, tabHandleChange
})(Profile)

export default ProfileContainer;