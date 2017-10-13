const passport = require('passport');

module.exports = app =>{
	app.get('/auth/facebook', passport.authenticate('facebook',{  scope: ['email']}));

	//add parameter hre to tell if new user from the database
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook'),
		(req,res)=>{
			if(req.user.newuser){
				res.redirect('/welcome');
			}else{
				res.redirect('/home')
			}

		}
	);

	app.get('/api/current_user',(req,res)=>{
		res.send(req.user);

	});

	app.get('/api/logout',(req,res)=>{
		//removes the cookie
		req.logout();
		res.redirect('/');
	});
};