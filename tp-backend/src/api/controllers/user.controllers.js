import { insertNewuser } from "../models/users.models.js";

export const createNewUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const [result] = await insertNewuser(name, email, password);

		res.render("createUser", {
			title: "Crear usuario",
			about: "Crear usuario admin",
			message: "Usuario creado exitosamente",
		});
	} catch (error) {
		console.log("Error creando usuario: ", error);
		res.status(500).json({
			message: "Error interno al cargar usuario",
		});
	}
};
