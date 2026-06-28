import { Request, Response } from "express";
import { fetchAllTrucks, fetchTruckById } from "../services/trucks";

export async function getAllTrucks(req: Request, res: Response) {
    try {
        const trucks = await fetchAllTrucks();
        res.json(trucks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch trucks'});
    }
}

export async function getTruckById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const truck = await fetchTruckById(id);
        if (!truck) {
            res.status(404).json({ error: 'Truck not found'});
        }
        res.json(truck);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch truck'});
    }
}