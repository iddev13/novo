import { combineReducers, createStore, applyMiddleware } from "redux";
//@ts-ignore
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from "./reducers/auth-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import headerNavReducer from "./reducers/headerNav-reducer";
import homeFilterReducer from "./reducers/homeFilter-reducer";
import logosReducer from "./reducers/logos-reducer";
import novodbReducer from "./reducers/novodb";
import profileReducer from "./reducers/profile-reducer";
import searchResultReducer from "./reducers/searchResult-reduser";
import userReducer from "./reducers/user-reducer";

let rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	novodb: novodbReducer,
	headerNav: headerNavReducer,
	profile: profileReducer,
	logos: logosReducer,
	user: userReducer,
	homeFilter: homeFilterReducer,
	dialog: dialogReducer,
	searchResult: searchResultReducer
});

// For reducers
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// For actions
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
// @ts-ignore
window.store = store;