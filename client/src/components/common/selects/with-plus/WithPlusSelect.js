import { useState } from 'react';
import './WithPlusSelect.scss';


const WithPlusSelect = ({ item, selected, setSelected, name, additionalCharacter, ...props }) => {

	const placeholder = localStorage.getItem(name) ?? selected;
	const [isActive, setIsActive] = useState(false);

	// let options = item.map((elem, index) => {
	// 	return <div
	// 		className="selectPlus__item"
	// 		onClick={(event) => {
	// 			setSelected(elem)
	// 			setIsActive(false)
	// 			localStorage.setItem(name, elem);
	// 		}}
	// 		key={index.toString()}>{`${elem}`}</div>
	// })


	return (
		<div className={`selectPlus ${!isActive ? '' : 'active'}`}>

			<div className="selectPlus__btn" onClick={() => { setIsActive(!isActive) }}>
				<span className="selectPlus__arrow"></span>
				{`${placeholder} ${additionalCharacter === undefined ? '' : additionalCharacter}`}
			</div>
			<div
				className={`selectPlus__content${!isActive ? '' : 'active'}`}
			>
				<div className="selectPlus__item">
					<div className="selectPlus__item">
						{props.children}
					</div>
				</div>
			</div >
		</div >
	)
}

export default WithPlusSelect;