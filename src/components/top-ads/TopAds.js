
import 'swiper/swiper.scss';
import { useWindowSize } from '../../hooks/Hooks';
import OtherCard from '../common/cards/other-card/OtherCard';
import './TopAds.scss';
import TopAdsSlider from './TopAdsSlider';




const TopAdsBodyCards = (props) => {
	return (
		<div className="top-Ads__bodyCards top-bodyCards">
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
			<div className="top-bodyCards__card">
				<OtherCard />
			</div>
		</div>
	)
}

const TopAds = (props) => {

	const size = useWindowSize();

	return (
		<section className="top-Ads">
			<div className="container">
				<div className="top-Ads__inner">
					<header className="top-Ads__header">
						<h2 className="top-Ads__title">Топ объявления</h2>
					</header>
					<div className="top-Ads__body">
						{
							size.width > 480
								? <TopAdsBodyCards />
								: <TopAdsSlider />
						}
					</div>
					<footer className="top-Ads__footer">
						<button className="link">больше объявлений</button>
					</footer>
				</div>
			</div>
		</section >
	)
}

export default TopAds;