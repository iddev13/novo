import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import RecentlyViewed from "./RecentlyViewed";

type MapStateToPropsType = {}
type MapDispatchToPropsType = {}
type OwnPropsType = {}

type PropsTypes = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType): PropsTypes => {
	return {}
}

const RecentlyViewedContainer = connect(mapStateToProps, {})(RecentlyViewed);

export default RecentlyViewedContainer;