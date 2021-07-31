import { connect } from "react-redux";
import HomeBuyer from "./HomeBuyer";

let mapStateToProps = (state) => {
	return {}
}

const HomeBuyerContainer = connect(mapStateToProps, {})(HomeBuyer);

export default HomeBuyerContainer;