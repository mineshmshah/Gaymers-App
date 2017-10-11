const connect = require('../../db/db_connections');

const getUser = {};

getUser.fb_id = (fb_id, callback) => {
	const sqlQuery = `
    SELECT *
      FROM users
      WHERE fb_id = '${fb_id}'
  `;

	connect.query(sqlQuery, (err, response) => {
		if (err) {
			return callback(new Error('Database error while fetching user'));
		}
		console.log(response);
		callback(null, response.rows[0]);
	});
};

getUser.id = (id, callback) => {
	const sqlQuery = `
    SELECT *
      FROM users
      WHERE id = '${id}'
  `;

	connect.query(sqlQuery, (err, response) => {
		if (err) {
			return callback(new Error('Database error while fetching user'));
		}
		console.log(response);
		callback(null, response.rows[0]);
	});
};
module.exports = getUser;
