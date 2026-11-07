/*===== IMPORTACIONES ========= */

import express from "express";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";


const app = express();
const PORT = enviroments.port;

/*========== MIDDLEWARES ================ */

app.use(cors());

app.use(express.json()) //Parsea el json para recibirlo en el endpoint como un objeto.

app.use((req, res, next) => {
	const fecha = new Date();
	console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()} ${req.method} ${req.url}]`);
	next();
});


/**========= ENDPOINTS =================== */

//GET all products
app.get("/api/products", async(req, res) => {
	try {
		const [rows] = await connection.query("SELECT * FROM products");
		res.status(200).json({payload: rows})

	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error interno del Servidor"});
	}
});



//GET produdct by id
app.get("/api/products/:id", async(req, res) => {
	try {
		const id = req.params.id;

		const [rows] = await connection.query("SELECT * FROM products WHERE id = ?",
				[id]
			);
			if (rows.length === 0) {      //Validacion de que el id exista
				return res.status(404).json({message:"Producto NO encontrado"});
			}

		res.status(200).json({payload: rows});

	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error interno del Servidor"});
	}
});


//POST creat new product
app.post("/api/products", async(req, res) => {
	try {
		const {category, image, name, price} = req.body;

		//Validacion de que todos los campos esten completos.
		if(!category || !image || !name || price === undefined) {
			return res.status(400).json({message: "Faltan datos del producto"});
		}

		const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

		await connection.query(sql, [name, image, category, price]);

		res.status(201).json({message:"Producto creado exitosamente"});

	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error interno del Servidor"});	
	}
});


//PUT product
app.put("/api/products", async(req, res) => {
	try {
		const {id, name, image, price, category} = req.body;

		//Validacion de que todos los campos esten completos.
		if(!id || !category || !image || !name || price === undefined) {
			return res.status(400).json({message:"Faltan datos del producto"});
		}

		const sql = "UPDATE products SET  name = ?, image = ?, price = ?, category = ? WHERE id = ?";

		//extriago el primer elemento (el resultado) del array en una variable con destructuracion
		const [result] = await connection.query(sql, [name, image, price, category, id]);

		//Si las filas afectadas son igual a cero el producto no se encuentra en la bd
		if(result.affectedRows === 0){
			return res.status(404).json({message:"Producto no encontrado"});
		}

		res.status(200).json({message:"Producto Actualizado exitosamente"});

	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error interno del Servidor"});
	}
});


//DELETE product
app.delete("/api/products/:id", async(req, res) => {
	try {
		const id = req.params.id;

		const sql = "DELETE FROM products WHERE id = ?";

		//extriago el primer elemento (el resultado) del array en una variable con destructuracion
		const [result] = await connection.query(sql, [id]);

		//Si las filas afectadas son igual a cero el producto no se encuentra en la bd
		if(result.affectedRows === 0) {
			return res.status(404).json({message:"Producto no encontrado"});
		}

		res.status(200).json({message:`Producto con id ${id} eliminado exitosamente`});
		
	} catch (error) {
		console.log(error);
		res.status(500).json({message:"Error interno del Servidor"});
	}
});



app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
