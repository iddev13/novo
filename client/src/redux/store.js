import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import authReducer from "./reducers/auth-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import headerNavReducer from "./reducers/headerNav-reducer";
import homeFilterReducer from "./reducers/homeFilter-reducer";
import logosReducer from "./reducers/logos-reducer";
import novodbReducer from "./reducers/novodb";
import profileReducer from "./reducers/profile-reducer";
import searchResultReducer from "./reducers/searchResult-reduser";
import selectHelper from "./reducers/select-helper";
import userReducer from "./reducers/user-reducer";


let reducers = combineReducers({
	form: formReducer,
	auth: authReducer,
	novodb: novodbReducer,
	selectHelper: selectHelper,
	headerNav: headerNavReducer,
	profile: profileReducer,
	logos: logosReducer,
	user: userReducer,
	homeFilter: homeFilterReducer,
	dialog: dialogReducer,
	searchResult: searchResultReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;