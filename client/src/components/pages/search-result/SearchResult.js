import React, { useEffect } from 'react'
import { Container } from '@material-ui/core';
import SearchCard from '../../common/cards/search-card/SearchCard';
import WithPlusSelect from '../../common/selects/with-plus/WithPlusSelect';
import AccordionM from '../../common/accordions/AccordionM';
import CheckboxM from '../../common/checkboxes/CheckboxM';
import SearchResultItem from './SearchResultItem';
import { allCategoryHelpFunction } from '../../../helpers/SelectHelper';
import BreadCrumbsMU from '../../common/bread-crumbsMU/BreadCrumbsMU';
import CountryComponent from './country/CountryComponent';
import RangeSliderMU from './range-slider/RangeSliderMU'
import './SearchResult.scss';

const SearchResult = ({
	items, removeSortValue, sortItems, setSortItem,
	removeSortItem, removeAllSortItems,
	itemTypeTypes, itemBrands, setFilterItem, filterItems,
	onChangeItemChecked,
	...props }) => {
	// debugger
	const searchResultHandler = (selectName, value) => {
		setSortItem(selectName, value);
	}

	const transmission = ['автомат', 'ручная']
	const adType = ['частное лицо', 'бизнес']

	// Min Max Price
	const minMaxPrices = () => {
		let myArray = []
		items.forEach(elem => { myArray[myArray.length] = elem.price });
		let min = Math.min.apply(null, myArray)
		let max = Math.max.apply(null, myArray)
		return [min, max]
	}

	let prices = minMaxPrices()
	// =================================

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
	const categoryList = allCategoryHelpFunction(items, 'category')
	const countries = allCategoryHelpFunction(items, 'country')

	let brandCounter = new Set([])
	items.forEach(elem => brandCounter.add(elem.brand))

	const brandsList = itemBrands.map((elem) => {
		return <CheckboxM
			checkboxName={elem.name}
			category="brand"
			selectName="производитель"
			setSortItem={setSortItem}
			removeSortItem={removeSortItem}
			check={elem.checked}
			checkboxCategory="brand"
			setFilterItem={setFilterItem}
			itemBrands={itemBrands}
			onChangeItemChecked={onChangeItemChecked}
			key={elem.id}
		/>
	})
	const transmissionList = transmission.map((elem, index) => {
		return <CheckboxM checkboxName={elem}
			selectName="коробка передач"
			key={index.toString()} />
	})
	const adTypeList = adType.map((elem, index) => {
		return <CheckboxM checkboxName={elem}
			selectName="тип обьявления"
			key={index.toString()} />
	})
	return (
		<article className="searchResult">
			<Container>
				<header className="searchResult__header">
					<BreadCrumbsMU />
				</header>
				<section className="searchResult__body">
					<aside className="searchResult__sidebar">
						<WithPlusSelect selected="цена">
							<RangeSliderMU prices={prices} />
						</WithPlusSelect>
						<WithPlusSelect
							selected="Тип транспорта">
							<AccordionM
								toggleBtn="arrow"
								sortItems={sortItems}
								categoryList={categoryList}
								setSortItem={setSortItem}
								accordionName="Грузоподьемность"
							/>
						</WithPlusSelect>
						<WithPlusSelect
							selected="Производитель">
							{brandsList}
						</WithPlusSelect>
						<WithPlusSelect
							selected="Страна
							местонахождения">
							<CountryComponent
								selectName="Страна местонахождения"
								searchResultHandler={searchResultHandler}
								countries={countries} />
						</WithPlusSelect>
						<WithPlusSelect
							selected="Коробка передач">
							{transmissionList}
						</WithPlusSelect>
						<WithPlusSelect
							selected="Тип объявления">
							{adTypeList}
						</WithPlusSelect>
						<footer className="searchResult__sidebarFooter">
							<button className="link">применить</button>
						</footer>
					</aside>
					<section className="searchResult__content content-searchResult">
						<div className="content-searchResult__items">
							{sortItems.map((elem, index) => {
								return <SearchResultItem
									category={elem.category}
									categoryName={elem.key1}
									value1={elem.value1}
									removeSortItem={removeSortItem}
									onChangeItemChecked={onChangeItemChecked}
									key={index.toString()}
								/>
							})}

							{
								sortItems.length > 0
									? <button
										className="content-searchResult__itemsClear"
										onClick={removeAllSortItems}
									>Очистить всё</button>
									: null
							}


						</div>
						{itemBrands.map(elem => {
							return <div>
								{elem.name}-<span>{
									elem.checked
										? 'true'
										: 'false'
								}</span>
							</div>
						})}
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