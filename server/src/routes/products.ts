import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from "../controllers/products";

const router = Router();

// CREATE
router.post('/', createProduct);

// READ
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// UPDATE
router.put('/:id', updateProductById);

// DELETE
router.delete('/:id', deleteProductById);


export default router;