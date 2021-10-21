import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { getAuthToken, getAuthIsAuthenticated, getAuthIsSeller } from "../../../../../redux/selectors/auth-selector";
import MyAds from "./MyAds";
import MyAdsHeader from "./MyAdsHeader";
import NewAd from "./new-ad/NewAd";
import { useHttp } from '../../../../../hooks/Hooks';
import { actionsAuth, loginAuth } from '../../../../../redux/reducers/auth-reducer';
import { pushAdTC } from "../../../../../redux/reducers/user-reducer";
import { getItemSearchResult } from "../../../../../redux/selectors/searchResult-selector";
import { getItemsTC } from "../../../../../redux/reducers/searchResult-reduser"

const MyAdsContainer = (props) => {
	const { request } = useHttp();
	const [isNewAd, setIsNewAd] = useState(false);

	const changeHeader = (val) => {
		setIsNewAd(val);
	}

	const formData = (formdata) => {
		props.pushAdTC(formdata, request);
	}

	const getItems = () => {
		props.getItemsTC(request)
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<>
			<MyAdsHeader isNewAd={isNewAd} changeHeader={changeHeader} />
			<Route exact path="/buyer-profile" render={() => <MyAds {...props} />} />
			<Route exact path="/buyer-profile/:new-ad" render={() => <NewAd formData={formData} />} />
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		token: getAuthToken(state),
		isAuth: getAuthIsAuthenticated(state),
		isSeller: getAuthIsSeller(state),
		items: getItemSearchResult(state)
	}
}

const MyAdsContainerRedux = connect(mapStateToProps, {
	loginAuth: actionsAuth.loginAuth,
	pushAdTC,
	getItemsTC
})(MyAdsContainer);

export default MyAdsContainerRedux