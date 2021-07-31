import UserPopup from '../../common/user popup/UserPopup';
import MenuPopupSm from '../../common/menu-popup-sm/MenuPopupSm';
import './Nav.scss';
import Search from '../../common/search/Search';

const Nav = (props) => {

	return (
		<nav className="header-nav">
			<div className="header-nav__left nav-left">
				{/* <Select
					selected={selected}
					setSelected={setSelected}
					language={props.language} /> */}
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
						<a href="/" className="link-seller">Стать продавцом</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;

