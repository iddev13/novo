import ProfileFormEmailRedux from "./ProfileFormEmail";


const ProfileFormEmailContainer = (props) => {
	const formData = (formData) => {
		console.log(formData);
	}
	return (
		<ProfileFormEmailRedux {...props} onSubmit={formData} />
	)
}

export default ProfileFormEmailContainer;