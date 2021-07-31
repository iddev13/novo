import { useState } from 'react';
import FilterCard from '../cards/filter-card/FilterCard';
import Select from '../selects/Select';
import './Filter.scss';


const Filter = (props) => {

	const [selected, setSelected] = useState(props.weightCat[0]); // First select
	const [selectedBrand, setSelectedBrand] = useState(props.brandCat[0]); // First select
	// debugger
	return (
		<section className="filter">
			<div className="container">
				<div className="filter__inner">
					<article className="filter__wrapper">
						<header className="filter__header">
							<div className="filter__header-buttons">
								{props.buttons.map((elem, index) => {
									return <button
										// className="filter__header-button active"
										className={
											index === 0 ? 'active' : ''
										}
										key={index.toString()}
									>
										{elem}
									</button>
								})}
							</div>
						</header>
						<div className="filter__body">
							<div className="filter__body-row">
								<div className="filter__body-item">
									<Select item={props.weightCat} setItem={props.setWeightCat} selected={selected} setSelected={setSelected} />
								</div>
								<div className="filter__body-item">
									<Select item={props.brandCat} setItem={props.setBrandCat} selected={selectedBrand} setSelected={setSelectedBrand} />
								</div>
							</div>


						</div>
						<footer className="filter__footer">
							<button className="link">{`поиск ${props.cars.length}(результатов)`}</button>
						</footer>
					</article>
					<aside className="filter-day-offer filter-offer">
						<FilterCard />
					</aside>
				</div>
			</div>
		</section>
	)
};

export default Filter;