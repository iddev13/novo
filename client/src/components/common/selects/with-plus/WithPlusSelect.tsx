import { useState } from 'react';
import './WithPlusSelect.scss';

type PropsType = {
	selected: string
	name: string
	additionalCharacter: string
	children: any
}

const WithPlusSelect: React.FC<PropsType> = ({ selected, name, additionalCharacter, children, ...props }) => {

	const placeholder = localStorage.getItem(name) ?? selected;
	const [isActive, setIsActive] = useState(false);

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
						{children}
					</div>
				</div>
			</div >
		</div >
	)
};

export default WithPlusSelect;