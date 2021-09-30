import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomeBuyerContainer from '../pages/home-buyer/HomeBuyerContainer';
import HomeSellerContainer from '../pages/home-seller/HomeSellerContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import SearchResultContainer from '../pages/search-result/SearchResultContainer';
import Preloader from '../common/preloader/Preloader';
import Page404 from '../pages/404-page/404';
import './Main.scss';
const ProductCardContainer = React.lazy(() => import('../pages/product-card/ProductCardContainer'));

const Main = () => {
	return (
		<main className="main">
			<Route exact path="/" render={() => <HomeBuyerContainer />} />
			<Route path="/seller" render={() => <HomeSellerContainer />} />
			<Route path="/buyer-profile" render={() => <ProfileContainer />} />
			<Route path="/login-page" render={() => <LoginPage />} />
			<Route path="/register-page" render={() => <RegisterPage />} />
			<Route path="/search-result" render={() => <SearchResultContainer />} />
			<Route path="/product-card" render={() => {
				return <Suspense fallback={<Preloader />}>
					<ProductCardContainer />
				</Suspense>
			}} />
			<Route path="/error" render={() => {
				return <Suspense fallback={<Preloader />}>
					<Page404 />
				</Suspense>
			}} />
		</main>
	)
}

export default Main;