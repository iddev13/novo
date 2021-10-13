import './UserPopup.scss'
import UserIcon from '../../common/sprite/UserIcon';
import { useWindowSize } from "../../../hooks/Hooks";
import { NavLink } from 'react-router-dom';

const MenuPopup = ({ isAuth, logoutAuth, headerNav, navHandleChange, newMessagesAmount, ...props }) => {
	// debugger
	const size = useWindowSize();

	const navList = headerNav.map(elem => {
		return <li
			className={elem.name === 'Сообщнния' && newMessagesAmount > 0 ? 'menu-popup__active' : ''}
			onClick={
				() => {
					navHandleChange(elem.id)
					if (elem.name === 'Выйти') {
						logoutAuth()
					}
				}
			}
			// onClick={}
			key={elem.id}>
			<NavLink to={elem.name === 'Выйти' ? "/" : "/buyer-profile"}
				className={`menu-popup__link ${elem.name === 'Сообщнния' && newMessagesAmount > 0 ? 'menu-popup__active' : ''}`}
			>{elem.name}
				<span>{elem.name === 'Сообщнния' && newMessagesAmount > 0 ? `(${newMessagesAmount} новых)` : null}</span>
			</NavLink>
		</li >
	})

	return (
		<>
			{
				isAuth
					? <div className="menu-popup">
						{size.width < 768
							? <UserIcon />
							: <NavLink to="/buyer-profile" className="menu-popup__user-link">Мой профиль</NavLink>}
						<ul className="menu-popup__list">{navList}
						</ul>
					</div>
					: <div className="enterLink">
						<NavLink to="/login-page">
							Войти
						</NavLink>
					</div>
			}
		</>
	)
}

export default MenuPopup;