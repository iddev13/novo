
import car from '../../../../image/cars/search-opel.jpg';
import Location from '../../sprite/Location';
import './SearchCard.scss';

const SearchCard = ({ category, brand, model, country, date, description, km, owner, price, weight, year, ...props }) => {
	return (
		<section className="filter-searchCard">
			<div className="filter-searchCard__image">
				<a className="filter-searchCard__image-wrapper" href="/">
					<img src={car} alt="Opel" />
				</a>
			</div>
			<div className="filter-searchCard__body">
				<h4 filter-searchCard__suptitle>{category}</h4>
				<h2 className="filter-searchCard__title">
					<a href="/">{brand}&nbsp;{model}</a>
				</h2>
				<ul className="filter-searchCard__badges">
					<li>{year}</li>
					<li>{weight} kg</li>
					<li>{km} km</li>
				</ul>
				<div className="filter-searchCard__other-info">
					<div className="filter-searchCard__location">
						<div className="filter-searchCard__location-icon">
							<Location />
						</div>
						<p className="filter-searchCard__location-text">{country}</p>
					</div>
					<div className="filter-searchCard__price">{price}<span span className="filter-searchCard__price-currency">€</span>
					</div>
				</div>
			</div>
		</section >
	)
}

export default SearchCard;