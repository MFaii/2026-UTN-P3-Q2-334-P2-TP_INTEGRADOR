import mysql2 from "mysql2/promise";

const connection = mysql2.createPool({});

export default connection;
