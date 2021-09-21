
import car from '../../../../image/cars/search-opel.jpg';
import Location from '../../sprite/Location';
import './SearchCard.scss';

const SearchCard = () => {
	return (
		<section className="filter-searchCard">
			<div className="filter-searchCard__image">
				<a className="filter-searchCard__image-wrapper" href="/">
					<img src={car} alt="Opel" />
				</a>
			</div>
			<div className="filter-searchCard__body">
				<h4 filter-searchCard__suptitle>Закрытые грузопассажирские автомобили</h4>
				<h2 className="filter-searchCard__title">
					<a href="/">Opel COMBO Airco Elct Ramen Stuurbediening  Garage van Nierop NetherlandsGarage van Nierop Netherlands</a>
				</h2>
				<ul className="filter-searchCard__badges">
					<li>2015</li>
					<li>2 000 kg</li>
					<li>490 574 km</li>
				</ul>
				<div className="filter-searchCard__other-info">
					<div className="filter-searchCard__location">
						<div className="filter-searchCard__location-icon">
							<Location />
						</div>
						<div className="filter-searchCard__location-text">Garage van Nierop Netherlands</div>
					</div>
					<div className="filter-searchCard__price">
						1 500
						<span className="filter-searchCard__price-currency">€</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SearchCard;