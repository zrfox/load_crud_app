import { Request, Response } from "express";
import { fetchAllDrivers, fetchDriverById } from "../services/drivers";

export async function getAllDrivers(req: Request, res: Response) {
    try {
        const loads = await fetchAllDrivers();
        res.json(loads);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch drivers' });
    }
}

export async function getDriverById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const driver = await fetchDriverById(id);
        if (!driver) {
            res.status(404).json({ error: 'Driver not found'});
            return;
        }
    res.json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch driver' });
    }
}