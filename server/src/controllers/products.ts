import { Request, Response } from "express";
import { createProduct as createProductService, fetchAllProducts, fetchProductById, updateProductById as updateProductByIdService, deleteProductById as deleteProductByIdService } from "../services/products";

// CREATE
export async function createProduct(req: Request, res: Response) {
    try {
        const driver = await createProductService(req.body);
        // 201 = successfully created
        res.status(201).json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create product'});
    }
}

// READ
export async function getAllProducts(req: Request, res: Response) {
    try {
        const products = await fetchAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json ({ error: 'Failed to fetch products'});
    }
}

export async function getProductById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const product = await fetchProductById(id);
        if (!product) {
            res.status(404).json({ error: 'Product not found'});
            return;
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch product'});
    }
}

// UPDATE
export async function updateProductById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid Product id'});
            return;
        }
        // TODO: validate data = req.body
        const updatedProduct = updateProductByIdService(id, data);
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json({ error: 'Failed to update product' })
    }
    
}
// DELETE
export async function deleteProductById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: `delete for product id ${id} is invalid`});
            return;
        }
        const product = await fetchProductById(id);
        if (!product) {
            res.status(404).json({error: `Product id ${id} cannot be found`});
            return;
        }
        await deleteProductByIdService(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete product'});
    }
}