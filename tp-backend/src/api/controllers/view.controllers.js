import ProductModels from "../models/product.models.js";

export const vistaPrincipal = async (req, res) => {
	try {
		const [rows] = await ProductModels.selectAllProducts();

		res.render("index", {
			title: "Principal",
			listaProductos: rows,
		});
	} catch (error) {
		console.log("Error obteniendo productos: ", error);

		res.status(500).json({
			message: "Error interno al obtener productos",
		});
	}
};

export const vistaConsultar = (req, res) => {
	res.render("get", {
		title: "Consultar",
	});
};

export const vistaCrear = (req, res) => {
	res.render("post", {
		title: "Crear",
		about: "Crear producto",
	});
};

export const vistaModificar = (req, res) => {
	res.render("put", {
		title: "Modificar",
	});
};

export const vistaEliminar = (req, res) => {
	res.render("delete", {
		title: "Eliminar ",
	});
};
