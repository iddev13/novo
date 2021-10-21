import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";
import HomeSeller from "./HomeSeller";

let mapStateToProps = (state: AppStateType) => { return {} }

const HomeSellerContainer = connect(mapStateToProps, {})(HomeSeller);

export default HomeSellerContainer;