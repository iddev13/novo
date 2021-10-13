import { getAuthIsAuthenticated } from '../../../redux/selectors/auth-selector';
import { logoutAuth } from '../../../redux/reducers/auth-reducer';
import { navHandleChange } from '../../../redux/reducers/headerNav-reducer'
import UserPopup from './UserPopup';
import { getHeaderNav } from '../../../redux/selectors/headerNav-selector';
import { getNewMessagesAmount } from '../../../redux/selectors/dialog-selector';

const { connect } = require("react-redux");

let mapStateToProps = (state) => {
	return {
		isAuth: getAuthIsAuthenticated(state),
		headerNav: getHeaderNav(state),
		newMessagesAmount: getNewMessagesAmount(state),
	}
}

const UserPopupContainer = connect(mapStateToProps, {
	logoutAuth,
	navHandleChange
})(UserPopup);

export default UserPopupContainer;