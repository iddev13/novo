import './UserPopup.scss'
import UserIcon from '../../common/sprite/UserIcon';
import { useWindowSize } from "../../../hooks/Hooks";

const MenuPopup = () => {

	const size = useWindowSize();

	return (
		<div className="menu-popup">
			{size.width < 768
				? <UserIcon />
				: 'Мой профиль'}
				<ul className="menu-popup__list">
					<li>
						<a className="menu-popup__link" href="/">Избранное</a>
					</li>
					<li className="menu-popup__active">
						<a className="menu-popup__link" href="/">
							Сообщнния
							<span>(4 новых)</span>
						</a>
					</li>
					<li>
						<a className="menu-popup__link" href="/">Настройки профиля</a>
					</li>
				</ul>
		</div>
	)
}

export default MenuPopup;