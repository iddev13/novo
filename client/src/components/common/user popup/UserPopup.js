import './UserPopup.scss'
import UserIcon from '../../common/sprite/UserIcon';
import { useWindowSize } from "../../../hooks/Hooks";
import { NavLink } from 'react-router-dom';

const MenuPopup = () => {

	const size = useWindowSize();

	return (
		<div className="menu-popup">
			{size.width < 768
				? <UserIcon />
				: <NavLink to="/buyer-profile" className="menu-popup__user-link">Мой профиль</NavLink>}
			<ul className="menu-popup__list">
				<li>
					<NavLink className="menu-popup__link" to="/buyer-profile/favorites">Избранное</NavLink>
				</li>
				<li className="menu-popup__active">
					<NavLink className="menu-popup__link" to="/buyer-profile/message">
						Сообщнния
						<span>(4 новых)</span>
					</NavLink>
				</li>
				<li>
					<NavLink className="menu-popup__link" to="/buyer-profile/profile-setting">Настройки профиля</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default MenuPopup;