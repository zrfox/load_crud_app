import { Request, response, Response } from "express";
import { createDriver as createDriverService, fetchAllDrivers, fetchDriverById, updateDriverById as updateDriverByIdService } from "../services/drivers";
import { loadEnvFile } from "node:process";

// CREATE
export async function createDriver(req: Request, res: Response) {
    try {
        const driver = await createDriverService(req.body);
        res.status(201).json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to created driver'});
    }
}

// READ
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
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const driver = await fetchDriverById(id);
        if (!driver) {
        // use res.status and not throw, or else throw will be caught and print the catch's res.status(500)
            res.status(404).json({ error: 'Driver not found'});
            return;
        }
    res.json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch driver' });
    }
}

// UPDATE
export async function updateDriverById(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || typeof id !== 'string') {
            res.status(400).json({error: `Update for driver id ${id} is invalid`});
            return;
        }
        // TODO: validate data = req.body
        const updatedDriver = await updateDriverByIdService(id, data);
        res.status(200).json(updatedDriver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update driver'})
    }
}