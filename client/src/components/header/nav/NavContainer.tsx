import { connect } from "react-redux";
import { getHeaderNavCurrency, getHeaderNavLanguage } from "../../../redux/selectors/headerNav-selector";
import Nav from "./Nav";
import { actionsNovoDB } from '../../../redux/reducers/novodb';
import { actionsHeaderNav, LanguageType } from '../../../redux/reducers/headerNav-reducer';
import { AppStateType } from "../../../redux/store";

type MapStateToProps = {
	language: LanguageType
	currency: LanguageType
}
type MapDispatchToProps = {
	changeSelectValue: (value: string) => void,
	setActiveLanguage: (value: number) => void,
	setActiveCurrency: (value: number) => void,
}
type OwnProps = {}
type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

let mapStateToProps = (state: AppStateType) => {
	return {
		language: getHeaderNavLanguage(state),
		currency: getHeaderNavCurrency(state),
	}
}

const NavContainer = connect(mapStateToProps,
	{
		changeSelectValue: actionsNovoDB.changeSelectValue,
		setActiveLanguage: actionsHeaderNav.setActiveLanguage,
		setActiveCurrency: actionsHeaderNav.setActiveCurrency,
	})(Nav);

export default NavContainer;