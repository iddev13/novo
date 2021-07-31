import Location from '../../sprite/Location';
import './FilterCard.scss';
import car from '../../../../image/cars/opel.jpg';
import DayOffer from './DayOffer';

const FilterCard = () => {
	return (
		<section className="filter-card">
			<div className="filter-card__image">
				<a className="filter-card__image-wrapper" href="/">
					<img src={car} alt="Opel" />
				</a>
			</div>
			<h2 className="filter-card__title">
				<a href="/">Opel COMBO Airco Elct Ramen Stuurbediening  Garage van Nierop NetherlandsGarage van Nierop Netherlands</a>
			</h2>
			<span className="filter-card__description">Закрытые грузопассажирские автомобили</span>
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
			<DayOffer />
		</section>
	)
}

export default FilterCard;