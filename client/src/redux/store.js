import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import authReducer from "./reducers/auth-reducer";
import headerNavReducer from "./reducers/headerNav-reducer";
import logosReducer from "./reducers/logos-reducer";
import novodbReducer from "./reducers/novodb";
import profileReducer from "./reducers/profile-reducer";
import selectHelper from "./reducers/select-helper";


let reducers = combineReducers({
	form: formReducer,
	auth: authReducer,
	novodb: novodbReducer,
	selectHelper: selectHelper,
	headerNav: headerNavReducer,
	profile: profileReducer,
	logos: logosReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;