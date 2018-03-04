import axios from 'axios';
import { FETCH_USER, REGISTER_USER, ADD_GAME } from './types';

// Using redux thunk here
// It does not return an action directly but when called instantly returns a function
// Redux thunk is wired up as a middleware
// If redux thunk sees that we return a function instead of a normal action, it will automatically call that function
// It will automatically pass in the dispatch function as an argument
// We want the dispatch to be called only once the the axios function has been completed
export const fetchUser = ()=> async dispatch=>{
		const res = await axios.get('/api/current_user');
		dispatch({type:FETCH_USER, payload:res.data});
		console.log('fetchuser:',res.data)
	};

// export const newUserUpdate =
// export function newUserUpdate(values,callback){
//   // Note: cant put in state right away as does not hae an id associated with it]
//   const request = axios.post(`/api/registerUser`, values)
//     .then(callback);
//   return{
//     type: REGISTER_USER,
//     payload:request
//   }
// }



export const addGame = (search)=> async dispatch=>{
    const proxy = 'https://still-eyrie-36200.herokuapp.com/'
    const res = await axios.get(`${proxy}https://api-2445582011268.apicast.io/games/?search=${search}&fields=name,category,genres,game_modes,cover,first_release_date,summary`,{
        headers: {
            'user-key':'18430b84d6bfaab720b08eeda8f2810d',
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
    dispatch({type:ADD_GAME, payload:res.data});
    console.log('gamedata:',res.data)
};
