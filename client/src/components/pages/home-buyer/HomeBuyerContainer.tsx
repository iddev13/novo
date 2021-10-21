import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";
import HomeBuyer from "./HomeBuyer";

let mapStateToProps = (state: AppStateType) => {
	return {}
}

const HomeBuyerContainer = connect(mapStateToProps, {})(HomeBuyer);

export default HomeBuyerContainer;