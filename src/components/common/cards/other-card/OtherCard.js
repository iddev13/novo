
import car from '../../../../image/cars/opel.jpg';
import Location from '../../sprite/Location';
import './OtherCard.scss';

const OtherCard = () => {
	return (
		<section className="filter-otherCard">
			<div className="filter-otherCard__image">
				<a className="filter-otherCard__image-wrapper" href="/">
					<img src={car} alt="Opel" />
				</a>
			</div>
			<div className="filter-otherCard__body">
				<h2 className="filter-otherCard__title">
					<a href="/">Opel COMBO Airco Elct Ramen Stuurbediening  Garage van Nierop NetherlandsGarage van Nierop Netherlands</a>
				</h2>

				<div className="filter-otherCard__other-info">
					<div className="filter-otherCard__location">
						<div className="filter-otherCard__location-icon">
							<Location />
						</div>
						<div className="filter-otherCard__location-text">Garage van Nierop Netherlands</div>
					</div>
					<div className="filter-otherCard__price">
						1 500
						<span className="filter-otherCard__price-currency">€</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OtherCard;