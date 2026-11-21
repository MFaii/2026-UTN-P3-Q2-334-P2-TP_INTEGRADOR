/* ========= RUTAS DE USUARIO ========= */

import { Router } from "express";
import connection from "../database/db.js";
import { createNewUser } from "../controllers/user.controllers.js";
import { checkExistingUser } from "../middlewares/middlewares.js";

const router = Router();

router.post("/", checkExistingUser, createNewUser);

export default router;
