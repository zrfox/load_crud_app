import { Router } from "express";
import { createTruck, getAllTrucks, getTruckById } from "../controllers/trucks";

const router = Router();

// CREATE
router.post('/', createTruck);

// READ
router.get('/', getAllTrucks);
router.get('/id', getTruckById);

export default router;