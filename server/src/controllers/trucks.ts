import { Request, Response } from "express";
import { createTruck as createTruckService, fetchAllTrucks, fetchTruckById, updateTruckById as updateTruckByIdService, deleteTrucksById as deleteTruckByIdService } from "../services/trucks";

// CREATE
export async function createTruck(req: Request, res: Response) {
    try {
        const truck = await createTruckService(req.body);
        res.status(201).json(truck);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create truck'});
    }
}

// READ
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
        const { id } = req.params;
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

// UPDATE
export async function updateTruckById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid truck id' });
            return;
        }
        // TODO: validate data = req.body
        const updatedTruck = updateTruckByIdService(id, data);
        res.status(200).json(updatedTruck);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update truck'});
    }
}

// DELETE
export async function deleteTruckById( req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: `Delete for truck id ${id} is invalid` });
            return;
        }
        const driver = await fetchTruckById(id);
        if(!driver) {
            res.status(404).json({ error: `Truck id ${id} cannot be found`});
            return;
        }
        await deleteTruckByIdService(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete truck'})
    }
}