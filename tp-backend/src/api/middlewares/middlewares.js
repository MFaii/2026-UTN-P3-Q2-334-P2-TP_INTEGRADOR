export const loggerUrl = (req, res, next) => {
	const fecha = new Date();
	console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
	next();
};

export const validateId = (req, res, next) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ message: "El id debe ser numero entero positivo" });

	req.id = id;
	next();
};

export const validateProduct = (req, res, next) => {
	const categoriasValidas = ["tv", "monitores", "notebooks", "celulares"];
	const errores = [];

	const { name, image, price, category } = req.body;

	if (!name || !image || !price || !category) {
		errores.push("Faltan campos requeridos");
	}

	if (typeof name !== "string" || name.trim().length < 2) {
		errores.push("El nombre debe tener al menos dos caracteres");
	}

	if (typeof price !== "number" || !Number.isFinite(price) || price <= 0) {
		errores.push("El precio debe ser un numero mayor a 0");
	}

	if (!categoriasValidas.includes(category)) {
		errores.push("Categoria invalida");
	}

	if (errores.length > 0) return res.status(400).json({ message: "Datos invalidos", listaErrores: errores });

	next();
};
