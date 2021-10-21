import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import Footer from "./Footer";

let mapStateToProps = (state: AppStateType) => {
	return {}
}

const FooterContainer = connect(mapStateToProps, {})(Footer);

export default FooterContainer;