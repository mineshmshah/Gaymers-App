import { combineReducers } from 'redux';
import authReducers from './authReducer';
import { reducer as formReducer } from 'redux-form';
import gameReducer, * as fromGames from './gameReducer';
import loadingReducer from './loadingReducer'

const allReducers = combineReducers({
	auth: authReducers,
	form: formReducer,
	gameReducer,
});

export default allReducers;

export const getIsFetching = (state) => fromGames.getIsFetching(state.gameReducer);
export const getVisibleGames = (state) => fromGames.getGames(state.gameReducer);