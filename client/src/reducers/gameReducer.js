import { REQUEST_GAME, FETCH_GAME } from '../actions/types';
import { combineReducers } from 'redux';
const games = (state=[], action) => {
	switch(action.type){
	case FETCH_GAME:
		console.log('here1');
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
const gameReducer =  combineReducers({
	games,
	isFetching
});

export default gameReducer;

export const getIsFetching = state =>  state.isFetching;
export const getGames = state => state.games;

