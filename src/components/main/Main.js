
import './Main.scss';
// import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomeBuyerContainer from '../pages/home-buyer/HomeBuyerContainer';
// const ContactContainer = React.lazy(() => import('../pages/contact/ContactContainer'));

const Main = () => {
	return (
		<main className="main">
			<Route exact path="/" render={() => <HomeBuyerContainer />} />
		</main>
	)
}

export default Main;