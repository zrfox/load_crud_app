import { Request, Response } from "express";
import { fetchAllProducts, fetchProductById } from "../services/products";

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
        const id = req.params.id;
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