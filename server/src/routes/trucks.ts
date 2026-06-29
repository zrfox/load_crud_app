import { Router } from "express";
import { createTruck, getAllTrucks, getTruckById, updateTruckById } from "../controllers/trucks";

const router = Router();

// CREATE
router.post('/', createTruck);

// READ
router.get('/', getAllTrucks);
router.get('/:id', getTruckById);

// UPDATE
router.put('/:id', updateTruckById);

export default router;