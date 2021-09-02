
let initialState = {
	message: [
		{ id: 1, message: 'Text message 1' },
		{ id: 2, message: 'Text message 2' },
		{ id: 3, message: 'Text message 3' },
		{ id: 4, message: 'Text message 4' },
	]
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default profileReducer;