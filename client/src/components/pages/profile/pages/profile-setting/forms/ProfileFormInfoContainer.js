import ProfileFormInfoRedux from "./ProfileFormInfo";


const ProfileFormInfoContainer = (props) => {


	const formData = (formData) => {
		console.log(formData);
	}
	return (
		<ProfileFormInfoRedux {...props} onSubmit={formData} />
	)
}

export default ProfileFormInfoContainer;