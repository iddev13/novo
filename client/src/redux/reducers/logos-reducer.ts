import ats from '../../image/logos/logo1.png';
import kleyn from '../../image/logos/logo2.png';
import dingemans from '../../image/logos/logo3.png';
import scania from '../../image/logos/logo4.png';
import { InferActionsTypes } from '../store';

export type LogosType = {
	id: number,
	address: string,
	image: string,
	alt: string
}

type InitialStateType = {
	logos: Array<LogosType>
}

let initialState: InitialStateType = {
	logos: [
		{ id: 1, address: '/', image: ats, alt: 'ats' },
		{ id: 2, address: '/', image: kleyn, alt: 'kleyn' },
		{ id: 3, address: '/', image: dingemans, alt: 'dingemans' },
		{ id: 4, address: '/', image: scania, alt: 'scania' },
	]
};

type ActionTypes = InferActionsTypes<typeof actionsLogos>

const logosReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const actionsLogos = {}

export default logosReducer;