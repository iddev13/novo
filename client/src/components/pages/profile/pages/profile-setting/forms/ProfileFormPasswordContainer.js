import ProfileFormPasswordRedux from "./ProfileFormPassword";

const ProfileFormPasswordContainer = (props) => {

	const formData = (formData) => {
		console.log(formData);
	}
	
	return (
		<ProfileFormPasswordRedux {...props} onSubmit={formData} />
	)
}

export default ProfileFormPasswordContainer;