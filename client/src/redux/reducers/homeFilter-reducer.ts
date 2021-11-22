import { actionsSearchResult } from './searchResult-reduser';
import { InferActionsTypes } from "../store";

const ON_CHANGE_CHECKBOX_ITEM_VALUE = 'novo/homeFilter/ON_CHANGE_CHECKBOX_ITEM_VALUE';

type CarsType = {
	id: Number
	category: String
	weightCat: String
	country: String
	brand: String
	model: String
	year: Number
	mileage: Number
	weight: Number
	description: String
	owner: String
	price: Number
}

export type FilterNamesType = {
	name: string
	value: string | number
	isActive: boolean
}

type ItemTypeType = {
	id: number
	name: string
	checked: boolean
}

type ItemBrandType = {
	id: number
	name: string
	checked: boolean
}

type initialStateType = {
	filterCurrentCategory: Number
	filterWeight: String | null
	cars: Array<CarsType | null>
	filterNames: Array<FilterNamesType>
	itemType: Array<ItemTypeType>
	itemBrand: Array<ItemBrandType>
}

let initialState: initialStateType = {
	filterCurrentCategory: 0,
	filterWeight: '32',
	cars: [
		{ id: 1, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'opel', model: 'combo airco elct ramen', year: 2014, mileage: 200000, weight: 2000, description: 'А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы.', owner: 'иван', price: 2000 },
		{ id: 2, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'bmw', model: '525', year: 1992, mileage: 600000, weight: 2000, description: 'А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы.', owner: 'олег', price: 3000 },
		{ id: 3, category: 'транспорт', weightCat: 'легковые', country: 'japan', brand: 'nissan', model: 'gt-r', year: 2015, mileage: 0, weight: 1752, description: 'ИДЕАЛЬНЫЙ СПОРТИВНЫЙ АВТОМОБИЛЬ Nissan GT-R — абсолютная легенда, признанная многими экспертами лучшим спортивным автомобилем в истории! Под капотом этого японского купе скрывается 3.8-литровый двигатель мощностью 555 л.с.! Разгон с нуля до 100 км/ч занимает просто невероятные 2.8 секунды! А благодаря полному приводу вы сможете наслаждаться скоростью при любых обстоятельствах. Максимальная скорость 315 км/ч! Коробка переключения передач — автоматическая, с двойным сцеплением и возможностью ручного переключения передач подрулевыми лепестками.', owner: 'игорь', price: 35000 },
		{ id: 4, category: 'транспорт', weightCat: 'легковые', country: 'germany', brand: 'mersedes', model: 'sprinter', year: 2008, mileage: 300000, weight: 1995, description: 'Существует четыре варианта длины кузова (три варианта колёсной базы) и три варианта высоты крыши, имеет двускатные или односкатные колёса задней оси. Грузоподъёмность шасси до 3350 кг. ... Существует возможность покупки шасси.', owner: 'артем', price: 10000 },
		{ id: 5, category: 'сельськое хозяйство', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000, description: 'Cars', owner: 'Owner' },
		{ id: 6, category: 'строительство', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000, description: 'Cars', owner: 'Owner' },
		{ id: 7, category: 'погрузочное оборудованиее', weightCat: 'грузовые', brand: 'other', country: 'other', model: 'some model', weight: 1500, year: 2021, mileage: 1000000, price: 1000, description: 'Cars', owner: 'Owner' },
	],
	filterNames: [
		{ name: 'name', value: 'value', isActive: false },
		{ name: 'грузоподьемность', value: 'легковые', isActive: false },
		{ name: 'грузоподьемность', value: 'грузовые', isActive: false },
		{ name: 'марка', value: 'bmw', isActive: false },
		{ name: 'марка', value: 'opel', isActive: false },
		{ name: 'марка', value: 'nissan', isActive: false },
		{ name: 'марка', value: 'mersedes', isActive: false },
		{ name: 'марка', value: 'другое', isActive: false },
		{ name: 'марка', value: 'bmw', isActive: false },
	],
	itemType: [
		{ id: 1, name: 'легковые', checked: false },
		{ id: 2, name: 'грузовые', checked: false }
	],
	itemBrand: [
		{ id: 1, name: 'bmw', checked: false },
		{ id: 2, name: 'opel', checked: false },
	]
}

type ActionsTypes = InferActionsTypes<typeof actionsHomeFilter>
const homeFilterReducer = (state = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ON_CHANGE_CHECKBOX_ITEM_VALUE:
			// console.log('ON_CHANGE_CHECKBOX_ITEM_VALUE: ', action);
			

			let newItemBrand = state.itemBrand.map((elem: any) => {
				if (elem.checked === false && elem.name === action.name) {
					// arr.push(action.name)
					return { ...elem, checked: true }
				}
				else if (elem.checked === true && elem.name === action.name) {
					return { ...elem, checked: false }
				}
				return elem
			})
			return {
				...state,
				itemBrand: newItemBrand
			}
		default: return state;
	}
}

export const actionsHomeFilter = {
	onChangeItemChecked: (name: string, checked: boolean) => {
		return {
			type: ON_CHANGE_CHECKBOX_ITEM_VALUE, name, checked
		} as const
	}
}

export default homeFilterReducer;