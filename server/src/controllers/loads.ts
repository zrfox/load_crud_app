// handle req/res logic. Get params, call service, send response back to client
// controllers don't know about firestore/database

import { Request, Response } from "express";
import db from "../utils/firebase/init-firebase";
import { fetchAllLoads, fetchLoadById, createLoad as createLoadService} from "../services/loads";
import { Load } from "../types/loads";

// CREATE

export async function createLoad(req: Request, res: Response) {
    try {
        const load = await createLoadService(req.body);
        res.status(201).json(load);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create load.'})
    }
}

export async function getAllLoads(req: Request, res: Response) {
    // catch service errors
    try {
        const loads = await fetchAllLoads();
        res.json(loads);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch loads'});
    }
}

export async function getLoadById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid id'});
            return;
        }
        const load = await fetchLoadById(id);
        if (!load) {
            res.status(404).json({ error: 'Load not found'});
            return;
        }
    res.json(load);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch load' });
    }
}