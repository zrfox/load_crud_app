import { Request, Response } from "express";
import { createShipper as createShipperService, fetchAllShippers, fetchShipperById, updateShipperById as updateShipperByIdService } from "../services/shippers"

// CREATE
export async function createShipper(req: Request, res: Response) {
    try {
        const shipper = await createShipperService(req.body);
        res.status(201).json(shipper);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create shipper.'})
    }
}


// READ
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
        const { id } = req.params;
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

// UPDATE
export async function updateShipperById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid shipper id'});
            return;
        }
        // TODO: validate data = req.body
        const updatedShipper = await updateShipperByIdService(id, data);
        res.status(200).json(updatedShipper);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update shipper' });
    }
}