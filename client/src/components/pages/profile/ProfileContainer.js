import { connect } from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state) => {
	return {}
}

const ProfileContainer = connect(mapStateToProps, {})(Profile);

export default ProfileContainer;