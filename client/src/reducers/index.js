import { combineReducers } from 'redux';
import authReducers from './authReducer';
import { reducer as formReducer } from 'redux-form';
import gameReducer, * as fromGames from './gameReducer';

export default combineReducers({
	auth: authReducers,
	form: formReducer,
	game: gameReducer
});

export const getIsFetching = (state) => fromGames.getIsFetching(state.game);
export const getVisibleGames = (state) => fromGames.getGames(state.game);