import { combineReducers } from 'redux';

let catchObject = {
	fishID: null,
	month: null,
	lat: null,
	lon: null,
	length: null,
	waterTemp: null,
};

const getCatchObject = (state = catchObject, action) => {
	switch (action.type) {
		case 'SET_SOMETHING':
			return state;
		default:
			return state;
	}
};

const getCatches = (state = [], action) => {
	switch (action.type) {
		case 'SET_CATCHES':
			return action.payload;
		default:
			return state;
	}
};

const getOneCatch = (state = [], action) => {
	switch (action.type) {
		case 'SET_ONE_CATCH':
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	getCatchObject,
	getCatches,
	getOneCatch,
});
