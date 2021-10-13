const TOGGLE_IS_ACTIVE = 'novo/nav/TOGGLE_IS_ACTIVE';
const SET_ACTIVE_LANGUAGE = 'novo/headerNav/SET_ACTIVE_LANGUAGE';
const SET_ACTIVE_CURRENCY = 'novo/headerNav/SET_ACTIVE_CURRENCY';
const NAV_HANDLE_CHANGE = 'novo/headerNav/NAV_HANDLE_CHANGE';
const PROFILE_TABS = 'novo/headerNav/PROFILE_TABS';
const PROFILE_TABS_CHANGE = 'novo/headerNav/PROFILE_TABS_CHANGE';

let initialState = {
	language: [
		{ id: 1, name: 'Русский', nameSm: 'RU', isActive: true },
		{ id: 2, name: 'Украинский', nameSm: 'UA', isActive: false },
	],
	currency: [
		{ id: 1, name: 'Евро', nameSm: '€', isActive: false },
		{ id: 2, name: 'Доллар', nameSm: '$', isActive: true },
		{ id: 3, name: 'Рубль', nameSm: 'RUR', isActive: false },
		{ id: 4, name: 'Гривна', nameSm: 'UAH', isActive: false },
	],
	headerNav: [
		{ id: 1, name: 'Избранное' },
		{ id: 2, name: 'Сообщнния' },
		{ id: 3, name: 'Настройки профиля' },
		{ id: 4, name: 'Выйти' },
	],
	isActive: false,
	activeTab: 0,
}

const headerNavReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_ACTIVE:
			return {
				...state,
				isActive: action.value
			}
		case SET_ACTIVE_LANGUAGE:
			return {
				...state,
				language: state.language.map(elem => {
					if (action.value === elem.id) {
						return { ...elem, isActive: true }
					}

					return { ...elem, isActive: false }
				})
			}
		case SET_ACTIVE_CURRENCY:
			return {
				...state,
				currency: state.currency.map(elem => {
					if (action.value !== elem.id) {
						return { ...elem, isActive: false }
					}
					return { ...elem, isActive: true }
				})
			}
		case NAV_HANDLE_CHANGE:
			return {
				...state,
				activeTab: action.id
			}
		case PROFILE_TABS_CHANGE:
			return {
				...state,
				activeTab: action.index
			}
		default:
			return state;
	}
}

export const toggleIsActive = (value) => {
	return {
		type: TOGGLE_IS_ACTIVE,
		value
	}
}

export const setActiveLanguage = (value) => {
	return {
		type: SET_ACTIVE_LANGUAGE,
		value
	}
}

export const setActiveCurrency = (value) => {
	return {
		type: SET_ACTIVE_CURRENCY,
		value
	}
}

export const navHandleChange = (id) => {
	return {
		type: NAV_HANDLE_CHANGE,
		id
	}
}

export function getA11yProps(index) {
	return {
		type: PROFILE_TABS,
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export const tabHandleChange = (index) => {
	return {
		type: PROFILE_TABS_CHANGE,
		index
	}
}

export default headerNavReducer;