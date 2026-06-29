import { Router } from "express";
import { createProduct, getAllProducts, getProductById } from "../controllers/products";

const router = Router();

// CREATE
router.post('/', createProduct);

// READ
router.get('/', getAllProducts);
router.get('/id', getProductById);

export default router;