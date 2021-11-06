import { connect } from "react-redux";
import { useHttp } from "../../../../../../hooks/Hooks";
import { changeUserLogin } from "../../../../../../redux/reducers/user-reducer";
import ProfileFormEmailRedux from "./ProfileFormEmail";

let mapStateToProps = () => {
	return {}
}

const ProfileFormEmailWrapper = (props) => {
	const { loading, error, request, clearError } = useHttp();

	const formData = (formData) => {
		props.changeUserLogin(formData, request)
		console.log(formData);
	}
	return (
		<ProfileFormEmailRedux {...props} onSubmit={formData} />
	)
}

const ProfileFormEmailContainer = connect(mapStateToProps, {
	changeUserLogin,
})(ProfileFormEmailWrapper)

export default ProfileFormEmailContainer;