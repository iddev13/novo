import React from 'react';
import './CountryComponent.scss';

type PropsType = {
	countries: Array<string>
	searchResultHandler: (categoryName: string, value: string) => void
	selectName: string
}

const CountryComponent: React.FC<PropsType> = ({ countries, searchResultHandler, selectName, ...props }) => {
	// debugger
	const countryList = countries.map((elem, index) => {
		return <li className="countryComponent__item"
			onClick={() => { searchResultHandler('страна местонахождения', elem) }}
			key={index.toString()}
		>
			{elem}
		</li>
	})

	return (
		<div className="countryComponent">
			<ul className="countryComponent__list">{countryList}</ul>
		</div>
	)
}

export default CountryComponent;