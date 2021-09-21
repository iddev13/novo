import './MyAds.scss';
import SearchCard from '../../../../common/cards/search-card/SearchCard';

const MyAds = (props) => {
	return (
		<>
			<section className="userAds">
				<div className="container">
					<div className="userAds__body">
						<div className="userAds__bodyItem">
							<SearchCard />
						</div>
						<div className="userAds__bodyItem">
							<SearchCard />
						</div>
						<div className="userAds__bodyItem">
							<SearchCard />
						</div>
						<div className="userAds__bodyItem">
							<SearchCard />
						</div>
					</div>
					<footer className="userAds__fotter">
						<button className="link">Загрузить ещё</button>
					</footer>
				</div>
			</section>
		</>
	)
}

export default MyAds;