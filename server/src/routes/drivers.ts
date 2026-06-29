import { Router } from "express";
import { createDriver, getAllDrivers, getDriverById, updateDriverById } from "../controllers/drivers";

const router = Router();

// CREATE
router.post('/', createDriver);

// READ
router.get('/', getAllDrivers);
router.get('/:id', getDriverById);

// UPDATE
router.put('/:id', updateDriverById);

export default router;