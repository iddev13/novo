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

const MyAdsContainer = (props) => {
	// debugger
	const { loading, error, request, clearError } = useHttp();
	const message = useMessage()

	const [isNewAd, setIsNewAd] = useState(false);

	const changeHeader = (val) => {
		setIsNewAd(val);
	}

	const formData = (formdata) => {
		console.log(props);
		console.log('NewAd formdata:', formdata);
		const itemHandler = async () => {
			try {
				const data = await request('/api/item/add', 'POST', { ...formdata }, { Authorization: `Bearer ${props.isAuth}` });
				message(data.message);
				// login(data.token, data.userId)
				// props.loginAuth(data.token, data.userId)
			} catch (error) {
				throw new Error(error)
			}
		}
		itemHandler();
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
	loginAuth
})(MyAdsContainer);

export default MyAdsContainerRedux