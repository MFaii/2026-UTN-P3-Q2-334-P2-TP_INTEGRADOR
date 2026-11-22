import authModels from "../models/auth.models.js";

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			//Renderizo la vista del login.ejs
			return res.render("login", {
				title: "Login usuario",
				about: "Login usuario admin",
				error: "Todos los campos son requeridos",
			});
		}

		const [rows] = await authModels.selectUserLogin(email, password);

		//Chequear si existe el usuario
		if (rows.length === 0) {
			return res.render("login", {
				title: "Login usuario",
				about: "Login de usuario admin",
				error: "Credenciales incorrectas",
			});
		}

		//Guardar el usuario
		const user = rows[0];

		//Guardar la sesion
		req.session.user = {
			id: user.id,
			name: user.name,
			email: user.email,
		};

		//Una vez creada la sesion se redirije al dashboard
		res.redirect("/dashboard/principal");
	} catch (error) {
		console.log("Error en el login: ", error);
		res.status(500).json({
			message: "Error interno del servidor",
		});
	}
};

export const logoutUser = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			console.log("Error al destruir la sesion: ", err);

			return res.status(500).json({
				message: "Error al cerrar la sesion",
			});
		}

		//redirige al login
		res.redirect("/login");
	});
};
