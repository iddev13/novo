import { Container } from '@material-ui/core';
import { useState } from 'react';
import BreadCrumb from '../../common/bread-crumb/BreadCrumb';
import './SearchResult.scss';
import SearchCard from '../../common/cards/search-card/SearchCard';
import WithPlusSelect from '../../common/selects/with-plus/WithPlusSelect';
import RangeSlider from './range-slider/RangeSlider';
import AccordionM from '../../common/accordions/AccordionM';
import CheckboxM from '../../common/checkboxes/CheckboxM';
import SearchResultItem from './SearchResultItem';


const SearchResult = ({ items, ...props }) => {
	// debugger
	const [selectedWeightCat, setSelectedWightCat] = useState(props.weightCat[0]); // Weight select

	const [crumbs, setCrumbs] = useState(['Главная', 'Транспортные средства'])

	// Min Max Price
	const minPrice = 0;
	let maxPrice = 0;
	items.forEach(elem => {
		if (elem.price > maxPrice) maxPrice = elem.price;
	});

	const selected = (crumb) => {
		console.log('BreadCrumbs: ', crumb);
	}

	const itemList = items.map(elem => {
		return <li className="content-searchResult__card" key={elem.id}>
			<SearchCard
				category={elem.category}
				brand={elem.brand}
				model={elem.model}
				country={elem.country}
				date={elem.date}
				description={elem.description}
				km={elem.km}
				owner={elem.owner}
				price={elem.price}
				weight={elem.weight}
				year={elem.year}
			/>
		</li>
	})

	return (
		<article className="searchResult">
			<Container>
				<header className="searchResult__header">
					<BreadCrumb crumbs={crumbs} selected={selected} />
				</header>
				<section className="searchResult__body">
					<aside className="searchResult__sidebar">
						<WithPlusSelect selected="цена">
							<RangeSlider
								minPrice={minPrice}
								maxPrice={maxPrice} />
						</WithPlusSelect>
						<WithPlusSelect
							selected="Тип транспорта">
							<AccordionM toggleBtn="arrow" accordionName="Грузовики" >

							</AccordionM>
						</WithPlusSelect>
						<WithPlusSelect
							selected="Производитель">
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
							<CheckboxM />
						</WithPlusSelect>
						<WithPlusSelect
							selected="Страна
							местонахождения">
							<AccordionM toggleBtn="plus" accordionName="Франция; Италия ">

							</AccordionM>
						</WithPlusSelect>
						<WithPlusSelect
							selected="Коробка передач">
							<CheckboxM />
							<CheckboxM />
						</WithPlusSelect>
						<WithPlusSelect
							selected="Тип объявления">
							<CheckboxM />
							<CheckboxM />
						</WithPlusSelect>
						<footer className="searchResult__sidebarFooter">
							<button className="link">применить</button>
						</footer>
					</aside>
					<section className="searchResult__content content-searchResult">
						<div className="content-searchResult__items">
							<SearchResultItem category="цена" value1="1200" value2="152444" />
							<SearchResultItem category="цена" value1="1200" value2="152444" />
							<button className="content-searchResult__itemsClear">Очистить всё</button>
						</div>
						<ul className="content-searchResult__cards">
							{itemList}
						</ul>
					</section>
				</section>
				<footer className="searchResult__footer">
					<button className="link">
						Загрузить ещё
					</button>
				</footer>
			</Container>
		</article>
	)
}

export default SearchResult;