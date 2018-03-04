import { REQUEST_GAME, FETCH_GAME } from '../actions/types';
import { combineReducers } from 'redux';



export default (state=[], action) => {
    console.log(action);
    switch(action.type){
        case FETCH_GAME:
            return action.payload || false;
        default:
            return state;
    }
};

