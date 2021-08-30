import { connect } from "react-redux";
import HomeSeller from "./HomeSeller";

let mapStateToProps = (state) => {
	return {}
}

const HomeSellerContainer = connect(mapStateToProps, {})(HomeSeller);

export default HomeSellerContainer;