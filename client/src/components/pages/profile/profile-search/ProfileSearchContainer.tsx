import ProfileSearchRedux from "./ProfileSearch";

const ProfileSearchContainer: React.FC = (props) => {
	const searchResult = (formData: any) => {
		console.log(formData);
	}
	return (
		<ProfileSearchRedux {...props} onSubmit={searchResult} />
	)
}

export default ProfileSearchContainer;