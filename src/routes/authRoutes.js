const passport = require('passport');

module.exports = app =>{
	app.get('/auth/facebook', passport.authenticate('facebook',{ authType: 'rerequest', scope: ['email']}));

	//add parameter hre to tell if new user from the database
	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	app.get('/api/current_user',(req,res)=>{
		res.send(req.user);

	});

	app.get('/api/logout',(req,res)=>{
		//removes the cookie
		req.logout();
		res.send(req.user);
	});
};