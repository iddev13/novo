import './UserPopup.scss'
import UserIcon from '../sprite/UserIcon';
import { useWindowSize } from "../../../hooks/Hooks";
import { NavLink } from 'react-router-dom';
import { HeaderNavType } from '../../../redux/reducers/headerNav-reducer';

type PropsType = {
	isAuth: boolean
	logoutAuth: () => void
	headerNav: Array<HeaderNavType>
	navHandleChange: (id: number) => void
	newMessagesAmount: number
}

const MenuPopup: React.FC<PropsType> = ({ isAuth, logoutAuth, headerNav, navHandleChange, newMessagesAmount, ...props }) => {
	const size: any = useWindowSize();

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