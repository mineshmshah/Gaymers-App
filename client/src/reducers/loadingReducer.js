import { REQUEST_GAME, FETCH_GAME } from '../actions/types';
import { combineReducers } from 'redux';


export default (state = false, action) => {
	switch (action.type) {
	case REQUEST_GAME:
		return true;
	case FETCH_GAME:
		return false;
	default:
		return state;
	}
};


