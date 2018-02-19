const connect = require('../../db/db_connections');

const post = {};

post.games = (name, category, genres, games_modes, cover, first_release_date,callback)=>{
	const sqlQuery = `
    INSERT INTO games (name, category, genres, games_modes, cover, first_release_date)
    VALUES ($1, $2, $3, $4, $5, $6);
  `;
	connect.query(sqlQuery, [name, category, genres, games_modes, cover, first_release_date], (err) => {
		if (err) {
			return callback(new Error('Database error while adding new game'));
		}
		callback(null, 'New game added');

};

module.exports = post;
