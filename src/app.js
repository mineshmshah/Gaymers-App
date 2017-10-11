const express = require('express');
const path = require('path');
const User = require('./model/getUserData');
//const favicon = require('serve-favicon');

const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
require('env2')('./config.env');





passport.use(new Strategy({

	clientID: process.env.FB_CLIENTID,
	clientSecret: process.env.FB_SECRET,
	callbackURL: 'http://localhost:3000/auth/facebook/callback',
	profileFields: ['email','displayName','profileUrl','picture']
},(accessToken,refreshToken,profile,cb)=>{
	console.log('access token',accessToken);
	console.log('refresh token',refreshToken);
	console.log('profile token',profile);
	console.log('cb token',cb);
	User.fb_id(accessToken.id,(err,Obj)=>{
		if(err){
			console.log('error');
		}else{
			console.log(Obj)
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

