import './CountryComponent.scss';

type PropsType = {
	countries: Array<string>
	searchResultHandler: (value: string) => void
	selectName: string
}

const CountryComponent: React.FC<PropsType> = ({ countries, searchResultHandler, selectName, ...props }) => {

	const countryList = countries.map((elem, index) => {
		return <li className="countryComponent__item"
			onClick={() => { searchResultHandler(elem) }}
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