import { Container } from '@material-ui/core';
import { useState } from 'react';
import BreadCrumb from '../../common/bread-crumb/BreadCrumb';
import './SearchResult.scss';
import SearchCard from '../../common/cards/search-card/SearchCard';
import WithPlusSelect from '../../common/selects/with-plus/WithPlusSelect';
import RangeSlider from './range-slider/RangeSlider';
import AccordionM from '../../common/accordions/AccordionM';
import CheckboxM from '../../common/checkboxes/CheckboxM';
import SelectRV2 from '../../common/selects/select-react.v2/SelectRV2';


const SearchResult = (props) => {

	const [selectedWeightCat, setSelectedWightCat] = useState(props.weightCat[0]); // Weight select

	const [crumbs, setCrumbs] = useState(['Главная', 'Транспортные средства'])

	const selected = (crumb) => {
		console.log('BreadCrumbs: ', crumb);
	}

	return (
		<article className="searchResult">
			<Container>
				<header className="searchResult__header">
					<BreadCrumb crumbs={crumbs} selected={selected} />
				</header>
				<section className="searchResult__body">
					<aside className="searchResult__sidebar">
						<WithPlusSelect selected="цена">
							<RangeSlider />
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
						<div className="content-searchResult__select">
							<SelectRV2 />
						</div>
						<ul className="content-searchResult__cards">
							<li className="content-searchResult__card">
								<SearchCard />
							</li>
							<li className="content-searchResult__card">
								<SearchCard />
							</li>
							<li className="content-searchResult__card">
								<SearchCard />
							</li>
							<li className="content-searchResult__card">
								<SearchCard />
							</li>
							<li className="content-searchResult__card">
								<SearchCard />
							</li>
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