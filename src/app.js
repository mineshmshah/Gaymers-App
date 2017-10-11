const express = require('express');
const path = require('path');
const getUserData = require('./model/getUserData');
const postFBData = require('./model/postUserDetails');
//const favicon = require('serve-favicon');

const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
require('env2')('./config.env');





passport.use(new Strategy({

	clientID: process.env.FB_CLIENTID,
	clientSecret: process.env.FB_SECRET,
	callbackURL: 'http://localhost:3000/auth/facebook/callback',
	profileFields: ['email','displayName','profileUrl','picture.type(large)']
},(accessToken,refreshToken,profile,cb)=>{
	// console.log('access token',accessToken);
	// console.log('refresh token',refreshToken);
	// console.log('profile token',profile);
	// console.log('cb token',cb);
	getUserData.fb_id(profile._json.id,(err,userObj)=>{
		//If we have an error the user was not found - make a new record
		if(err) {
			console.log('Databasee error',err);
		}
		if(!userObj){
			postFBData.users(profile._json.id, profile._json.name, profile._json.email, profile._json.picture.data.url, 'true' , profile._json.link,(err,userObj)=>{
				if (err){
					console.log(err);
				}
			});
		} else{
			//we already have a record so we don't need to save anew record
			console.log('UserExists in the DB');
		}
	});
	//return cb(null, profile);
}));


// passport.serializeUser(function(user, cb) {
// 	cb(null, user);
// });
//
// passport.deserializeUser(function(obj, cb) {
// 	cb(null, obj);
// });


const app = express();

app.get('/auth/facebook', passport.authenticate('facebook',{ authType: 'rerequest', scope: ['email']}));

app.get('/auth/facebook/callback', passport.authenticate('facebook'));

//app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
module.exports = app;

