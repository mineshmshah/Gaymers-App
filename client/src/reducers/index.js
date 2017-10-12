import { combineReducers } from 'redux';
import authReducers from './authReducer';

export default combineReducers({
	auth: authReducers
});