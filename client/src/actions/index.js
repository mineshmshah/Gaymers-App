import axios from 'axios';
import { FETCH_USER, REGISTER_USER } from './types';

export const fetchUser = ()=> async dispatch=>{
		const res = await axios.get('/api/current_user');
		dispatch({type:FETCH_USER, payload:res.data});
	};

// export const newUserUpdate =


export function newUserUpdate(values,callback){
  // Note: cant put in state right away as does not hae an id associated with it]
  const request = axios.post(`/api/registerUser`, values)
    .then(callback);
  return{
    type: REGISTER_USER,
    payload:request
  }
}