import { useState } from 'react';
import './Select.scss';


const Select = ({ item, setItem, selected, setSelected }) => {
	// debugger

	const placeholder = selected ?? 'Выберите категорию'
	const [isActive, setIsActive] = useState(false);

	let options = item.map((elem, index) => {
		return <div
			className="select__item"
			onClick={(event) => {
				setSelected(elem)
				setIsActive(false)
			}}
			key={index.toString()}>{elem}</div>
	})

	return (
		<div className={`select ${isActive ? '' : 'active'} `}>
			<div className="select__btn" onClick={() => { setIsActive(!isActive) }}>
				{placeholder}
				<span className="select__arrow"></span>
			</div>
			<div
				className="select__content"
			>
				{isActive ? options : ''}
			</div >
		</div >




		// <div className={`select ${isActive ? '' : 'active'} `}>
		// 	<div className="select__btn" onClick={() => { setIsActive(!isActive) }}>
		// 		{selected}
		// 		<span className="select__arrow"></span>
		// 	</div>
		// 	<div className="select__content">
		// 		{isActive ? options : ''}
		// 	</div >
		// </div >
	)
}

export default Select;