import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controllers.js";
import { validateId, validateProduct } from "../middlewares/middlewares.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", validateId, getProductById);

router.post("/", validateProduct, createProduct);

router.put("/", validateProduct, updateProduct);

router.delete("/:id", validateId, deleteProduct);

export default router;
