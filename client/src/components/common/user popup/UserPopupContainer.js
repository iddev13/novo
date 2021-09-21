import { getAuthIsAuthenticated } from '../../../redux/selectors/auth-selector';
import { logoutAuth } from '../../../redux/reducers/auth-reducer';
import UserPopup from './UserPopup';

const { connect } = require("react-redux");

let mapStateToProps = (state) => {
	return {
		isAuth: getAuthIsAuthenticated(state)
	}
}

const UserPopupContainer = connect(mapStateToProps, {
	logoutAuth
})(UserPopup);

export default UserPopupContainer;