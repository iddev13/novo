import OtherCard from '../../../../common/cards/other-card/OtherCard';
import ProfileSearchContainer from '../../profile-search/ProfileSearchContainer';
import './Favorites.scss';

const Favorites = () => {
	return (
		<section className="profileFavorites">
			<div className="container">
				<ProfileSearchContainer />
				<div className="profileFavorites__inner">
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>
					<div className="profileFavorites__item">
						<OtherCard />
					</div>

					<div className="profileFavorites__item">
						<OtherCard />
					</div>
				</div>
				<button className="link">загрузить еще</button>
			</div>
		</section>
	)
}

export default Favorites;