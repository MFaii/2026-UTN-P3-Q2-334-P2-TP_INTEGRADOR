/*========= RUTAS DE AUTENTICACION ========== */

import { Router } from "express";
import connection from "../database/db.js";
const router = Router();


router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login usuario",
        about: "Login de usuario admin"
    });
});


router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        if(!email || !password) {
            //Renderizo la vista del login.ejs
            return res.render("login", {
                title: "Login usuario",
                about: "Login usuario admin",
                error: "Todos los campos son requeridos"
            });
        }

        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        const [rows] = await connection.query(sql, [email, password]);

        //Chequear si existe el usuario
        if(rows.length === 0) {
            return res.render("login", {
                title: "Login usuario",
                about: "Login de usuario admin",
                error: "Credenciales incorrectas"
            });
        }

        //Guardar el usuario
        const user = rows[0];

        //Guardar la sesion
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        
        //Una vez creada la sesion se redirije al dashboard
        res.redirect("/dashboard/principal");

        
    } catch (error) {
        console.log("Error en el login: ",error);
        res.status(500).json({
            message: "Error interno del servidor"
        });
    }
});


router.post("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            console.log("Error al destruir la sesion: ", err);

            return res.status(500).json({
                message: "Error al cerrar la sesion"
            });
        }
        
        //redirige al login
        res.redirect("/login"); 
    })
})


export default router;