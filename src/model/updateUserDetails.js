const connect = require('../../db/db_connections');

const update = {};

update.newUser = (fb_id, callback)=>{
  console.log(fb_id);

	const sqlQuery = `
    UPDATE users SET newUser = 'false' WHERE fb_id ='${fb_id}'
  `;
	connect.query(sqlQuery, (err, res) => {
		if (err) {
			return callback(new Error('Database error turning to new user true to false'));
		}
		callback(null, 'set new user to false');
	});
};

module.exports = update;
