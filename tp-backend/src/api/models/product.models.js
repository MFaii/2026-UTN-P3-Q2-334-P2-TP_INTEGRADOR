import connection from "../database/db.js";

const selectAllProducts = () => {
	return connection.query("SELECT * FROM products");
};

const selectProducById = (id) => {
	const sql = "SELECT * FROM products WHERE products.id = ?";
	return connection.query(sql, [id]);
};

const insertNewProduct = (name, image, category, price) => {
	const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

	return connection.query(sql, [name, image, category, price]);
};

const updateProduct = (name, image, category, price, active, id) => {
	const sql = "UPDATE products SET name = ?, image = ?, category = ?, price = ?, active = ? WHERE id = ?";

	return connection.query(sql, [name, image, category, price, active, id]);
};

const deleteProduct = (id) => {
	const sql = "DELETE FROM products WHERE id = ?";

	return connection.query(sql, [id]);
};

export default {
	selectAllProducts,
	selectProducById,
	insertNewProduct,
	updateProduct,
	deleteProduct,
};
