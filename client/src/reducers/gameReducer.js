import { ADD_GAME } from '../actions/types';

export default function(state=null, action){
	//console.log(action);
	switch(action.type){
	case ADD_GAME:
		return action.payload || false;
	default:
		return state;
	}
}