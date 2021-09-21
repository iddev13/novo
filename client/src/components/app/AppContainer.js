import { connect } from "react-redux";
import { getAuthIsAuthenticated, getAuthLogin, getAuthLogout, getAuthToken, getAuthUserId } from "../../redux/selectors/auth-selector";
import App from "./App";

let mapStateToProps = (state) => {
	return {
		token: getAuthToken(state),
		userId: getAuthUserId(state),
		login: getAuthLogin(state),
		logout: getAuthLogout(state),
		isAuthenticated: getAuthIsAuthenticated(state),
	}
}

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;
