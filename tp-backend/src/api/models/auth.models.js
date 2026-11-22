import connection from "../database/db.js";

const selectUserLogin = (email, password) => {
	const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
	return connection.query(sql, [email, password]);
};

const selectUserByEmail = (email) => {
	const sql = "SELECT * FROM users WHERE email = ?";
	return connection.query(sql, [email]);
};

export default { selectUserLogin, selectUserByEmail };
