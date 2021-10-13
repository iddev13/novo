
import MenuPopupSm from '../../common/menu-popup-sm/MenuPopupSm';
import './Nav.scss';
import Search from '../../common/search/Search';
import { NavLink } from 'react-router-dom';
import UserPopupContainer from '../../common/user popup/UserPopupContainer';

const Nav = ({ language, currency, changeSelectValue, setActiveLanguage, setActiveCurrency, ...props }) => {

	return (
		<nav className="header-nav">
			<div className="header-nav__left nav-left">
				<MenuPopupSm
					items={language}
					setActiveItems={setActiveLanguage}
				/>
				<MenuPopupSm
					items={currency}
					setActiveItems={setActiveCurrency}
				/>
				<Search />
			</div>
			<div className="header-nav__right nav-right">
				<ul className="nav-right__list">
					<li>
						<UserPopupContainer />
					</li>
					<li>
						<NavLink to="/seller" className="link-seller">Стать продавцом</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;

