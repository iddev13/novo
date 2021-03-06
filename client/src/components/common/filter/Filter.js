import React, { useState } from 'react';
import FilterCard from '../cards/filter-card/FilterCard';
import Select from '../selects/Select';
import ReactSelect from 'react-select';
import './Filter.scss';
import { NavLink } from 'react-router-dom';

const Filter = ({ filterNames, setCategory, ...props }) => {
	// debugger
	// const [selectedWeightCat, setSelectedWightCat] = useState(props.weightCat[0]); // Weight select
	// const [selectedCountryCat, setSelectedCountryCat] = useState(props.country[0]); // Country select
	// const [selectedBrand, setSelectedBrand] = useState(props.brandCat[0]); // Brand select
	// const [selectedModel, setSelectedModel] = useState(props.model[0]); // Model select
	// const [selectedYear, setSelectedYear] = useState(props.year[0]); // Year select
	// const [selectedPrice, setSelectedPrice] = useState(props.price[0]); // Price select
	// const [selectedMileage, setSelectedMileage] = useState(props.mileage[0]); // Mileage select
	// const [selectedWeight, setSelectedWeight] = useState(props.weight[0]); // Weight select

	// React-Select =================================================
	const createOptions = (arr) => {
		let options = [];
		arr.forEach(elem => {
			options.push({ value: elem, label: elem })
		});
		return options;
	}

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			color: state.isSelected ? '#000000' : '#252525',
			background: state.isFocused ? '#e7e7e7' : 'white',
			padding: 20,
			fontFamily: 'ManropeMedium, sans-serif',
			fontSize: 16,
			cursor: 'pointer',
		}),
		control: () => ({
			// none of react-select's styles are passed to <Control />
			// ...provided,
			display: 'flex',
			width: 100 + '%',
			height: 56,
			border: '2px solid #e9e9e9',
			background: '#ffffff',
			fontFamily: 'ManropeMedium, sans-serif',
			fontSize: 16,
			lineHeight: 140 + '%',
			color: '#252525',
			transition: 'all .2s ease',
			cursor: 'pointer',
			"&:hover": {
				borderColor: "#333333"
			}
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';
			return { ...provided, opacity, transition };
		},
		indicatorSeparator: () => ({
			display: 'none'
		})
	}
	// React-Select =================================================

	return (
		<section className="filter">
			<div className="container">
				<div className="filter__inner">
					<article className="filter__wrapper">
						<header className="filter__header">
							<ul className="filter__header-buttons">
								{props.buttons.map((elem, index) => {
									return <li
										className="filter__header-button"
										key={index.toString()}
									>
										<button
											className={index === props.currentCategory ? 'active' : ''}
											onClick={() => { setCategory(index) }}
										>
											{elem}
										</button>
									</li>
								})}
							</ul>
						</header>
						<div className="filter__body">
							<ul className="filter__body-row">
								<li className="filter__body-item">
									<label className="filter__label">??????????????????</label>
									<ReactSelect
										defaultValue={createOptions(props.weightCat)[0]}
										styles={customStyles}
										options={createOptions(props.weightCat)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">????????????</label>
									<ReactSelect
										defaultValue={createOptions(props.country)[0]}
										styles={customStyles}
										options={createOptions(props.country)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">??????????</label>
									<ReactSelect
										defaultValue={createOptions(props.brandCat)[0]}
										styles={customStyles}
										options={createOptions(props.brandCat)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">????????????</label>
									<ReactSelect
										defaultValue={createOptions(props.model)[0]}
										styles={customStyles}
										options={createOptions(props.model)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">?????? (?????????????? ??)</label>
									<ReactSelect
										defaultValue={createOptions(props.year)[0]}
										styles={customStyles}
										options={createOptions(props.year)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">????????</label>
									<ReactSelect
										defaultValue={createOptions(props.price)[0]}
										styles={customStyles}
										options={createOptions(props.price)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">????????????</label>
									<ReactSelect
										defaultValue={createOptions(props.mileage)[0]}
										styles={customStyles}
										options={createOptions(props.mileage)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
								<li className="filter__body-item">
									<label className="filter__label">??????</label>
									<ReactSelect
										defaultValue={createOptions(props.weight)[0]}
										styles={customStyles}
										options={createOptions(props.weight)}
										onChange={(event) => { console.log(event.value) }}
									/>
								</li>
							</ul>
						</div>
						<footer className="filter__footer footer-filter">
							<NavLink to="/search-result" className="link footer-filter__link">{`?????????? ${props.cars.length - 1}(??????????????????????)`}</NavLink>
						</footer>
					</article>
					<aside className="filter-day-offer filter-offer">
						<FilterCard card_description={true} />
					</aside>
				</div>
			</div>
		</section>
	)
};

export default Filter;