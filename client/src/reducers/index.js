import { combineReducers } from 'redux';
import authReducers from './authReducer';
import { reducer as formReducer } from 'redux-form';
import gameReducer, * as fromGames from './gameReducer';
import loadingReducer from "./loadingReducer";

const allReducers= combineReducers({
	auth: authReducers,
	form: formReducer,
	game: gameReducer,
	fetch: loadingReducer
})

export default allReducers;

