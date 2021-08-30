
import ProfileSearchRedux from "./ProfileSearch";


const ProfileSearchContainer = (props) => {

	const searchResult = (formData) => {
		console.log(formData);
	}

	return (
		<ProfileSearchRedux {...props} onSubmit={searchResult} />
	)
}

export default ProfileSearchContainer;