import { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { getAuthToken, getAuthIsAuthenticated, getAuthIsSeller } from "../../../../../redux/selectors/auth-selector";
import MyAds from "./MyAds";
import MyAdsHeader from "./MyAdsHeader";
import NewAd from "./new-ad/NewAd";
import { useHttp } from '../../../../../hooks/Hooks';
import { loginAuth } from '../../../../../redux/reducers/auth-reducer';
import { useMessage } from "../../../../../hooks/message.hook";
import { pushAdTC } from "../../../../../redux/reducers/user-reducer";

const MyAdsContainer = (props) => {
	// debugger
	const { loading, error, request, clearError } = useHttp();
	const message = useMessage()

	const [isNewAd, setIsNewAd] = useState(false);

	const changeHeader = (val) => {
		setIsNewAd(val);
	}

	const formData = (formdata) => {
		props.pushAdTC(formdata, request);
	}

	return (
		<>
			<MyAdsHeader isNewAd={isNewAd} changeHeader={changeHeader} />
			<Route exact path="/buyer-profile" render={() => <MyAds />} />
			<Route exact path="/buyer-profile/:new-ad" render={() => <NewAd formData={formData} />} />
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		token: getAuthToken(state),
		isAuth: getAuthIsAuthenticated(state),
		isSeller: getAuthIsSeller(state),
	}
}

const MyAdsContainerRedux = connect(mapStateToProps, {
	loginAuth, pushAdTC
})(MyAdsContainer);

export default MyAdsContainerRedux