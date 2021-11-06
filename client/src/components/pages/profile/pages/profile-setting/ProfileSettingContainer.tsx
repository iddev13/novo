import { connect } from "react-redux";
import { actionsAuth } from "../../../../../redux/reducers/auth-reducer";
import { AppStateType } from "../../../../../redux/store";
import ProfileSetting from "./ProfileSetting";

type MapStateToPropsType = {}
type MapDispatchToPropsType = { logoutAuth: () => void }
type OwnPropsType = {}

type PropsTypes = MapStateToPropsType | MapDispatchToPropsType | OwnPropsType

let mapStateToProps = (state: AppStateType): PropsTypes => {
	return {}
}

const ProfileSettingContainer = connect(mapStateToProps, {
	logoutAuth: actionsAuth.logoutAuth
})(ProfileSetting)

export default ProfileSettingContainer;