const INITIAL_VALUE = {
	description: '',
	list: []
};
export default (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case 'DESCRIPTION_CHANGE':
			return { ...state, description: action.payload};
		case 'TODO_SEARCH':
			return {...state, list: action.payload};
		case 'TODO_CLEAR':
			return { ...state, description: ''};
		default:
			return state;
	}
};
