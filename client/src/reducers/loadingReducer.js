
import { combineReducers } from 'redux';

const loadingReducer = (filter) => { // eslint-disable-line arrow-body-style
	const ids = (state = [], action) => {
		if (filter !== action.filter) {
			return state;
		}
		switch (action.type) {
		case 'RECEIVE_TODOS':
			return action.response.map(todo => todo.id);
		default:
			return state;
		}
	};

	const isFetching = (state = false, action) => {
		if (filter !== action.filter) {
			return state;
		}
		switch (action.type) {
		case 'REQUEST_TODOS':
			return true;
		case 'RECEIVE_TODOS':
			return false;
		default:
			return state;
		}
	};

	return combineReducers({
		ids,
		isFetching,
	});
};

export default loadingReducer;

export const getIds2 = (state) => state.ids;
export const getIsFetching2 = state => state.isFetching;

