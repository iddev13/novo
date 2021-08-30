import { useState } from 'react';
import './Select.scss';


const Select = ({ item, selected, setSelected, name, additionalCharacter }) => {

	const placeholder = localStorage.getItem(name) ?? selected;
	const [isActive, setIsActive] = useState(false);

	let options = item.map((elem, index) => {
		return <div
			className="select__item"
			onClick={(event) => {
				setSelected(elem)
				setIsActive(false)
				localStorage.setItem(name, elem);
			}}
			key={index.toString()}>{`${elem}`}</div>
	})


	return (
		<div className={`select ${isActive ? '' : 'active'} `}>
			<div className="select__btn" onClick={() => { setIsActive(!isActive) }}>
				{`${placeholder} ${additionalCharacter === undefined ? '' : additionalCharacter}`}
				<span className="select__arrow"></span>
			</div>
			<div
				className="select__content"
			>
				{isActive ? options : ''}
			</div >
		</div >
	)
}

export default Select;