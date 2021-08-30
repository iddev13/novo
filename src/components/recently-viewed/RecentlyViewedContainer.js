import { connect } from "react-redux";
import RecentlyViewed from "./RecentlyViewed";

let mapStateToProps = (state) => {
	return {}
}

const RecentlyViewedContainer = connect(mapStateToProps, {})(RecentlyViewed);

export default RecentlyViewedContainer;