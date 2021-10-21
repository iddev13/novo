import { AppStateType } from './../store';

export const getItemSearchResult = (state: AppStateType) => {
	return state.searchResult.items
}