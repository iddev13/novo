
// import OtherCard from '../../common/cards/other-card/OtherCard';
import FilterContainer from '../../common/filter/FilterContainer';
import LogosContainer from '../../logos/LogosContainer';
import RecentlyViewed from '../../recently-viewed/RecentlyViewed';
import TopAds from '../../top-ads/TopAds';
import './HomeBuyer.scss';

const HomeBuyer = (props) => {

	return (
		<article className="homeBuyer">
			<FilterContainer />
			<TopAds/>
			<LogosContainer />
			<RecentlyViewed />
		</article>
	)
}

export default HomeBuyer;