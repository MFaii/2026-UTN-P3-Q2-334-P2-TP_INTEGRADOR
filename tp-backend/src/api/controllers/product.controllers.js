import connection from "../database/db.js";
import productModels from "../models/product.models.js";

export const getAllProducts = async (req, res) => {
	try {
		const [rows] = await productModels.selectAllProducts();

		if (rows.length === 0) return res.status(400).json({ message: "No se encontraron productos" });

		res.status(200).json({ payload: rows, total: rows.length });
	} catch (error) {
		console.log("Error obteniendo todos los productos", error);

		res.status(500).json({ message: "Error interno al obtener productos" });
	}
};

export const getProductById = async (req, res) => {
	try {
		const [rows] = await productModels.selectProducById(req.id);

		if (rows.length === 0) return res.status(400).json({ message: `No se encontro producto con el id ${req.id}` });

		res.status(200).json({ payload: rows });
	} catch (error) {
		console.log("Error obteniendo productos: ", error);

		res.status(500).json({ message: "Error interno al obtener el producto" });
	}
};

export const createProduct = async (req, res) => {
	try {
		const { name, image, category, price } = req.body;

		const [result] = await productModels.insertNewProduct(name, image, category, price);

		res.status(201).json({ message: "Producto creado exitosamente", productId: result.insertId });
	} catch (error) {
		console.log("Error creando producto", error);

		res.status(500).json({ message: "Error interno al crear el producto" });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const { id, active, name, image, category, price } = req.body;

		const [result] = await productModels.updateProduct(name, image, category, price, active, id);

		if (result.affectedRows === 0) return res.status(404).json({ message: "No se actualizo el producto" });
		const [warnings] = await connection.query("SHOW WARNINGS");

		res.status(200).json({ message: "Producto actualizado exitosamente" });
	} catch (error) {
		console.log("Error actualizando producto", error);

		res.status(500).json({ message: "Error interno al modificar el producto" });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		await productModels.deleteProduct(req.id);

		res.status(200).json({ message: `Producto con el id: ${req.id} eliminado exitosamente` });
	} catch (error) {
		console.log("Error eliminando producto", error);

		res.status(500).json({ message: "Error interno al eliminar el producto" });
	}
};
