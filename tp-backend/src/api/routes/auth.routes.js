/*========= RUTAS DE AUTENTICACION ========== */

import { Router } from "express";
import connection from "../database/db.js";
import { loginUser, logoutUser } from "../controllers/auth.controllers.js";
import { vistaLogin } from "../controllers/view.controllers.js";
const router = Router();

router.get("/login", vistaLogin);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
