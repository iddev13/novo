import { Field, reduxForm, reset } from "redux-form";
import { ProfileInput } from "../../../common/form-controls/form-controls";
import ProfileSearchIcon from "../../../common/sprite/ProfileSearchIcon";
import './ProfileSearch.scss';

const afterSubmit = (result, dispatch) => {
	dispatch(reset('profileSearch'))
}

const ProfileSearch = (props) => {
	// debugger
	return (
		<form onSubmit={props.handleSubmit} className="profileSearch">
			<div className="profileSearch__item">
				<Field
					name="profileSearch"
					type="text"
					component={ProfileInput}
					placeholder="Поиск по объявлениях"
				/>
				<button type="submit"><ProfileSearchIcon /></button>
			</div>
		</form>
	)
}

const ProfileSearchRedux = reduxForm({ form: 'profileSearch', onSubmitSuccess: afterSubmit })(ProfileSearch)

export default ProfileSearchRedux;