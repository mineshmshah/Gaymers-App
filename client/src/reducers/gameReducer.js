import { RECEIVE_GAME, REQUEST_GAME, FETCH_GAME } from '../actions/types';
import { combineReducers } from 'redux';

const gameReducers = () => {
	const games = (state=[], action) => {
		//console.log(action);
		switch(action.type){
		case ADD_GAME:
			return action.payload || false;
		default:
			return state;
		}
	};

	const isFetching = (state = false, action) =>{
		switch (action.type) {
		case REQUEST_GAME:
			return true;
		case RECEIVE_GAME:
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

export default gameReducers;

export const getIsFetching = state => state.isFetching;
export const getGames = state => state.games;

