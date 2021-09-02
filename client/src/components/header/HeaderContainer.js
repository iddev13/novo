import { connect } from "react-redux";
import { getHeaderNavActive } from "../../redux/selectors/headerNav-selector";
import Header from "./Header";

window.onscroll = function showHeader() {
	var header = document.querySelector(".header");

	if (window.pageYOffset > 50) {
		header.classList.add("header__fixed");
	} else {
		header.classList.remove("header__fixed");
	}
};

let mapStateToPorps = (state) => {
	return {
		isActive: getHeaderNavActive(state)
	}
}

const HeaderContainer = connect(mapStateToPorps, {})(Header);

export default HeaderContainer;