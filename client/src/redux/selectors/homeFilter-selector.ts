import { AppStateType } from "../store";

export const getHomeFilterCurrentCategory = (state: AppStateType) => {
	return state.homeFilter.filterCurrentCategory;
}
export const getHomeFilterWeight = (state: AppStateType) => {
	return state.homeFilter.filterWeight;
}