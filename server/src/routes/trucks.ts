import { Router } from "express";
import { createTruck, getAllTrucks, getTruckById, updateTruckById, deleteTruckById } from "../controllers/trucks";

const router = Router();

// CREATE
router.post('/', createTruck);

// READ
router.get('/', getAllTrucks);
router.get('/:id', getTruckById);

// UPDATE
router.put('/:id', updateTruckById);

// DELETE
router.delete('/:id', deleteTruckById)

export default router;