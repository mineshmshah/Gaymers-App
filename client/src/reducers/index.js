import { combineReducers } from 'redux';
import authReducers from './authReducer';
import { reducer as formReducer } from 'redux-form';
import gameReducer from "./gameReducer";

export default combineReducers({
	auth: authReducers,
	form: formReducer,
	game: gameReducer
});
