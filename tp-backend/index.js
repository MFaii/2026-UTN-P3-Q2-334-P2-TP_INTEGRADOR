/*===== IMPORTACIONES ========= */

import express from "express";
import enviroments from "./src/api/config/enviroments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { join, __dirname } from "./src/api/utils/index.js";

const app = express();
const PORT = enviroments.port;

/* ========= Config EJS =========*/

app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views"));

/*========== MIDDLEWARES ================ */

app.use(cors());

app.use(express.json()); //Parsea el json para recibirlo en el endpoint como un objeto.

app.use(loggerUrl);

/* ========== Archivos estaticos ========== */

app.use(express.static(join(__dirname, "src/public")));

/**========= ENDPOINTS =================== */

app.use("/api/products", productRoutes);

app.use("/dashboard", viewRoutes);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
