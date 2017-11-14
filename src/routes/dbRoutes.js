const passport = require('passport');

module.exports = app =>{

	app.post('/api/registerUser',(req,res)=>{
	  //console.log('requestis:', req.body);
    res.send(req.body)
	});
};