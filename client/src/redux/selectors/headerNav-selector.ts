import { AppStateType } from "../store"

export const getHeaderNavActive = (state: AppStateType) => {
	return state.headerNav.isActive
}

export const getHeaderNavLanguage = (state: AppStateType) => {
	return state.headerNav.language
}

export const getHeaderNavCurrency = (state: AppStateType) => {
	return state.headerNav.currency
}

export const getHeaderNavActiveTab = (state: AppStateType) => {
	return state.headerNav.activeTab
}

export const getHeaderNav = (state: AppStateType) => {
	return state.headerNav.headerNav
}