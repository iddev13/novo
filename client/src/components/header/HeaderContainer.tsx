import { connect } from "react-redux";
import { getHeaderNavActive } from "../../redux/selectors/headerNav-selector";
import { AppStateType } from "../../redux/store";
import Header from "./Header";

window.onscroll = function showHeader() {
	var header: any = document.querySelector(".header");

	if (window.pageYOffset > 50) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
};

type MapStateToProps = {
	isActive: boolean
}
type MapDispatchToProps = {}
type OwnProps = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

let mapStateToPorps = (state: AppStateType): PropsType => {
	return {
		isActive: getHeaderNavActive(state)
	}
}

const HeaderContainer = connect(mapStateToPorps, {})(Header);

export default HeaderContainer;