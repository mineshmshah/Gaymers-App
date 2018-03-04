import { REQUEST_GAME, FETCH_GAME } from '../actions/types';
import { combineReducers } from 'redux';

const gameReducer = () => {
	const games = (state=[], action) => {
		console.log(action);
		switch(action.type){
		case FETCH_GAME:
			return action.payload || false;
		default:
			return state;
		}
	};

	const isFetching = (state = false, action) => {
		switch (action.type) {
		case REQUEST_GAME:
			return true;
		case FETCH_GAME:
			return false;
		default:
			return state;
		}
	};

	return combineReducers({
		games,
		isFetching
	});
};

export default gameReducer;

export const getIsFetching = state =>  state.isFetching
;
export const getGames = state => state.games;

