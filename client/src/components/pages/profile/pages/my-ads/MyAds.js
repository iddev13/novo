import './MyAds.scss';
import SearchCard from '../../../../common/cards/search-card/SearchCard';

const MyAds = ({ items, ...props }) => {
	const itemList = items.map(elem => {
		return <li className="content-searchResult__card" key={elem._id}>
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
		<>
			<section className="userAds">
				<div className="container">
					<ul className="userAds__body">{itemList}</ul>
					<footer className="userAds__fotter">
						<button className="link">Загрузить ещё</button>
					</footer>
				</div>
			</section>
		</>
	)
}

export default MyAds;