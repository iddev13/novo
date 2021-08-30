import ats from '../../image/logos/logo1.png';
import kleyn from '../../image/logos/logo2.png';
import dingemans from '../../image/logos/logo3.png';
import scania from '../../image/logos/logo4.png';

let initialState = {
	logos: [
		{ id: 1, address: '/', image: ats, alt: 'ats' },
		{ id: 2, address: '/', image: kleyn, alt: 'kleyn' },
		{ id: 3, address: '/', image: dingemans, alt: 'dingemans' },
		{ id: 4, address: '/', image: scania, alt: 'scania' },
	]
};

const logosReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default logosReducer;