import { connect } from "react-redux";
import { getHeaderNavCurrency, getHeaderNavLanguage } from "../../../redux/selectors/headerNav-selector";
import Nav from "./Nav";
import { changeSelectValue, setActiveLanguage, setActiveCurrency } from '../../../redux/reducers/novodb';

let mapStateToProps = (state) => {
	return {
		language: getHeaderNavLanguage(state),
		currency: getHeaderNavCurrency(state)
	}
}

const NavContainer = connect(mapStateToProps,
	{
		changeSelectValue,
		setActiveLanguage,
		setActiveCurrency,
	})(Nav);

export default NavContainer;