
import './Main.scss';
// import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomeBuyerContainer from '../pages/home-buyer/HomeBuyerContainer';
import HomeSellerContainer from '../pages/home-seller/HomeSellerContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
// const ContactContainer = React.lazy(() => import('../pages/contact/ContactContainer'));

const Main = () => {
	return (
		<main className="main">
			<Route exact path="/" render={() => <HomeBuyerContainer />} />
			<Route path="/seller" render={() => <HomeSellerContainer />} />
			<Route path="/buyer-profile" render={() => <ProfileContainer />} />
		</main>
	)
}

export default Main;