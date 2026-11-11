/*===== IMPORTACIONES ========= */

import express from "express";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";
import { productRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";

const app = express();
const PORT = enviroments.port;

/*========== MIDDLEWARES ================ */

app.use(cors());

app.use(express.json()); //Parsea el json para recibirlo en el endpoint como un objeto.

app.use(loggerUrl);

/**========= ENDPOINTS =================== */

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
