
let initialState = {
	brands: [],
	countries: [
		{id: 1, country: 'france'},
		{id: 2, country: 'usa'},
		{id: 3, country: 'russia'},
		{id: 3, country: 'germany'},
	]
}

const selectHelper = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default selectHelper;