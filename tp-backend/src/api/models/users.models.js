


import connection from "../database/db.js";

export const insertNewuser = (name, email, password) => {
     const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        
     return connection.query(sql, [name, email, password]);

}