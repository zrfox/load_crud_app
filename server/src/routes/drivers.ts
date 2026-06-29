import { Router } from "express";
import { getAllDrivers, getDriverById } from "../controllers/drivers";
import { createDriver } from "../controllers/drivers";

const router = Router();

// CREATE
router.post('/', createDriver);

// READ
router.get('/', getAllDrivers);
router.get('/id', getDriverById);

export default router;