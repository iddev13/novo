export const getHeaderNavActive = (state) => {
	return state.headerNav.isActive
}

export const getHeaderNavLanguage = (state) => {
	return state.headerNav.language
}

export const getHeaderNavCurrency = (state) => {
	return state.headerNav.currency
}

export const getHeaderNavActiveTab = (state) => {
	return state.headerNav.activeTab
}

export const getHeaderNav = (state) => {
	return state.headerNav.headerNav
}