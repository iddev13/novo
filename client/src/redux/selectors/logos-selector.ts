import { AppStateType } from "../store"

export const getLogos = (state: AppStateType) => {
	return state.logos.logos
}