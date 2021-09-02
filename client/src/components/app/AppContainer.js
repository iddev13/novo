import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = () => {
	return {}
}

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;