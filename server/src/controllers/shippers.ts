import { Request, Response } from "express";
import { fetchAllShippers, fetchShipperById } from "../services/shippers"


export async function getAllShippers(req: Request, res: Response) {
    try {
        const shippers = await fetchAllShippers();
        res.json(shippers);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch products'})
    }
    
}

export async function getShipperById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const shipper = await fetchShipperById(id);
        if (!shipper) {
            res.status(404).json({ error: 'Shipper not found'});
            return;
        }
        res.json(shipper);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch shipper'});
    }
}