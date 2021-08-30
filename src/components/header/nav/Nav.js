import UserPopup from '../../common/user popup/UserPopup';
import MenuPopupSm from '../../common/menu-popup-sm/MenuPopupSm';
import './Nav.scss';
import Search from '../../common/search/Search';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

	return (
		<nav className="header-nav">
			<div className="header-nav__left nav-left">
				<MenuPopupSm
					items={props.language}
					setActiveItems={props.setActiveLanguage}
				/>
				<MenuPopupSm
					items={props.currency}
					setActiveItems={props.setActiveCurrency}
				/>
				<Search />
			</div>
			<div className="header-nav__right nav-right">
				<ul className="nav-right__list">
					<li><UserPopup /></li>
					<li>
						<NavLink to="/seller" className="link-seller">Стать продавцом</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;

