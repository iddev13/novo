import { useWindowSize } from '../../../hooks/Hooks';
import './MenuPopupSm.scss';

const MenuPopupSm = ({ items, setActiveItems }) => {

	useWindowSize();

	let itemList = items.map(elem => {
		return <li onClick={() => {
			setActiveItems(elem.id)
		}} key={elem.id}>
			{window.outerWidth > 768 ? elem.name : elem.nameSm}
		</li>
	});

	return (
		<div className="menu-popup-sm">
			<div className="menu-popup-sm__selected">
				<span className="menu-popup-sm__selected-name">
					{items.map(elem => {
						if (window.outerWidth > 768) {
							return elem.isActive ? elem.name : ''
						}
						return elem.isActive ? elem.nameSm : ''
					})}
				</span>
				<div className="menu-popup-sm__arrow"></div>
			</div>
			<div className="menu-popup-sm__list-wrapper">
				<ul className="menu-popup-sm__list">
					{itemList}
				</ul>
			</div>
		</div>
	)
}

export default MenuPopupSm;

