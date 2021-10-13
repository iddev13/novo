import { connect } from "react-redux";
import { getHeaderNavCurrency, getHeaderNavLanguage } from "../../../redux/selectors/headerNav-selector";
import Nav from "./Nav";
import { changeSelectValue } from '../../../redux/reducers/novodb';
import { setActiveLanguage, setActiveCurrency } from '../../../redux/reducers/headerNav-reducer';

let mapStateToProps = (state) => {
	return {
		language: getHeaderNavLanguage(state),
		currency: getHeaderNavCurrency(state),
	}
}

const NavContainer = connect(mapStateToProps,
	{
		changeSelectValue,
		setActiveLanguage,
		setActiveCurrency,
	})(Nav);

export default NavContainer;