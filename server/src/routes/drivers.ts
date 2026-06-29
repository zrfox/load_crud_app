import { Router } from "express";
import { createDriver, getAllDrivers, getDriverById, updateDriverById, deleteDriverById } from "../controllers/drivers";

const router = Router();

// CREATE
router.post('/', createDriver);

// READ
router.get('/', getAllDrivers);
router.get('/:id', getDriverById);

// UPDATE
router.put('/:id', updateDriverById);

// DELETE
router.delete('/:id', deleteDriverById);

export default router;