const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const getUserData = require('./model/getUserData');
const postFBData = require('./model/postUserDetails');
const updateUserData = require('./model/updateUserDetails');
const bodyParser = require('body-parser');

//const favicon = require('serve-favicon');

const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
require('env2')('./config.env');


passport.serializeUser((user, done)=> {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	getUserData.id(id,(err,userObj)=>{
		if (err){throw err;}
		done(null,userObj);
	});
});

passport.use(new Strategy({

	clientID: process.env.FB_CLIENTID,
	clientSecret: process.env.FB_SECRET,
	callbackURL: '/auth/facebook/callback',
	profileFields: ['email','displayName','profileUrl','picture.type(large)']
},(accessToken,refreshToken,profile,done)=>{

	getUserData.fb_id(profile._json.id,(err,userObj)=>{
		// This is an error coming from pg
		if(err) {
			console.log('Database error',err);
		}
		// The search as successful but an empty string was returned so add profile
		if(!userObj){
			postFBData.users(profile._json.id, profile._json.name, profile._json.email, profile._json.picture.data.url, 'true' , profile._json.link,(err,userObj)=>{
				if (err){
					console.log(err);
				}else{
					done(null,userObj);
				}
			});
		} else{

			//we have found a matching record so user exists in the DB
			done(null,userObj);

		}
	});
	//return cb(null, profile);
}));

const app = express();
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge:30 * 24 * 60 * 60* 1000,
		keys: [process.env.COOKIEKEY]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/dbRoutes')(app);
updateUserData.newUser(13, (err, obj)=>{

	if(err) { console.log(err)}
	else {
		console.log(obj);
	}
});

//app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
module.exports = app;
