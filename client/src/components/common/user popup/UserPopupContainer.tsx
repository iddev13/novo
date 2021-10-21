import { getAuthIsAuthenticated } from '../../../redux/selectors/auth-selector';
import { actionsAuth } from '../../../redux/reducers/auth-reducer';
import { actions, HeaderNavType } from '../../../redux/reducers/headerNav-reducer'
import UserPopup from './UserPopup';
import { getHeaderNav } from '../../../redux/selectors/headerNav-selector';
import { getNewMessagesAmount } from '../../../redux/selectors/dialog-selector';
import { AppStateType } from '../../../redux/store';
const { connect } = require("react-redux");

type MapStateToPropsType = {
	isAuth: boolean
	headerNav: Array<HeaderNavType>
	newMessagesAmount: number
}
type MapDispatchToPropsType = {
	// logoutAuth: () => void,
	// navHandleChange: (id: number) => void
}
type OwnPropsType = {}
type PropsTypes = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType): PropsTypes => {
	return {
		isAuth: getAuthIsAuthenticated(state),
		headerNav: getHeaderNav(state),
		newMessagesAmount: getNewMessagesAmount(state),
	}
}

const UserPopupContainer = connect(mapStateToProps, {
	logoutAuth: actionsAuth.logoutAuth,
	navHandleChange: actions.navHandleChange
})(UserPopup);

export default UserPopupContainer;