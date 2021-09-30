import Location from '../../sprite/Location';
import './FilterCard.scss';
import car from '../../../../image/cars/opel.jpg';
import DayOffer from './DayOffer';
import { NavLink } from 'react-router-dom';

const FilterCard = ({ card_description }) => {
	return (
		<section className="filter-card">
			<div className="filter-card__image">
				<NavLink className="filter-card__image-wrapper" to="/product-card">
					<img src={car} alt="Opel" />
				</NavLink>
			</div>
			<h2 className="filter-card__title">
				<NavLink to="/product-card">Opel COMBO Airco Elct Ramen Stuurbediening  Garage van Nierop NetherlandsGarage van Nierop Netherlands</NavLink>
			</h2>
			{card_description
				? <span className="filter-card__description">Закрытые грузопассажирские автомобили</span>
				: null}

			<div className="filter-card__other-info">
				<div className="filter-card__location">
					<div className="filter-card__location-icon">
						<Location />
					</div>
					<div className="filter-card__location-text">Garage van Nierop Netherlands</div>
				</div>
				<div className="filter-card__price">
					1 500
					<span className="filter-card__price-currency">€</span>
				</div>
			</div>
			{card_description
				? <DayOffer />
				: null
			}
		</section>
	)
}

export default FilterCard;