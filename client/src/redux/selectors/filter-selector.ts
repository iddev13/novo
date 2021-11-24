import { AppStateType } from "../store"

export const getNovodbCars = (state: AppStateType) => {
	return state.homeFilter.cars
}


