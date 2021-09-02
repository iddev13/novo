const CHANGE_SELECT_VALUE = 'novo/common/CHANGE_SELECT_VALUE';
const SET_ACTIVE_LANGUAGE = 'novo/common/SET_ACTIVE_LANGUAGE';
const SET_ACTIVE_CURRENCY = 'novo/common/SET_ACTIVE_CURRENCY';


let initialState = {
	language: [
		{ id: 1, name: 'Русский', nameSm: 'RU', isActive: true },
		{ id: 2, name: 'Украинский', nameSm: 'UA', isActive: false },
	],
	currency: [
		{ id: 1, name: 'Евро', nameSm: '€', isActive: true },
		{ id: 2, name: 'Доллар', nameSm: '$', isActive: false },
		{ id: 3, name: 'Рубль', nameSm: 'RUR', isActive: false },
		{ id: 4, name: 'Гривна', nameSm: 'UAH', isActive: false },
	],
	user: [],
	cars: [
		{ id: 1, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'opel', model: 'combo airco elct ramen', year: 2014, mileage: 200000, weight: 2000, description: 'А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы.', owner: 'иван', price: 2000 },
		{ id: 2, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'bmw', model: '525', year: 1992, mileage: 600000, weight: 2000, description: 'А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы.', owner: 'олег', price: 3000 },
		{ id: 3, category: 'транспорт', weightCat: 'легковые', country: 'japan', brand: 'nissan', model: 'gt-r', year: 2015, mileage: 0, weight: 1752, description: 'ИДЕАЛЬНЫЙ СПОРТИВНЫЙ АВТОМОБИЛЬ Nissan GT-R — абсолютная легенда, признанная многими экспертами лучшим спортивным автомобилем в истории! Под капотом этого японского купе скрывается 3.8-литровый двигатель мощностью 555 л.с.! Разгон с нуля до 100 км/ч занимает просто невероятные 2.8 секунды! А благодаря полному приводу вы сможете наслаждаться скоростью при любых обстоятельствах. Максимальная скорость 315 км/ч! Коробка переключения передач — автоматическая, с двойным сцеплением и возможностью ручного переключения передач подрулевыми лепестками.', owner: 'игорь', price: 35000 },
		{ id: 4, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'mersedes', model: 'sprinter', year: 2008, mileage: 300000, weight: 1995, description: 'Существует четыре варианта длины кузова (три варианта колёсной базы) и три варианта высоты крыши, имеет двускатные или односкатные колёса задней оси. Грузоподъёмность шасси до 3350 кг. ... Существует возможность покупки шасси.', owner: 'артем', price: 10000 },
		{ id: 5, category: 'сельськое хозяйство', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000 },
		{ id: 6, category: 'строительство', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000 },
		{ id: 7, category: 'погрузочное оборудованиее', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000 },
	]
}

const novodbReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SELECT_VALUE:
			return {
				...state,
				languageActive: action.value
			}
		case SET_ACTIVE_LANGUAGE:
			return {
				...state,
				language: state.language.map(elem => {
					if (action.value !== elem.id) {
						return { ...elem, isActive: false }
					}
					return { ...elem, isActive: true }
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
		default:
			return state;
	}
}


export const changeSelectValue = (value) => {
	return {
		type: CHANGE_SELECT_VALUE,
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

export default novodbReducer;