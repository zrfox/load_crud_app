import { Router } from "express";
import { createShipper, getAllShippers, getShipperById, updateShipperById } from "../controllers/shippers";

const router = Router();

// CREATE
router.post('/', createShipper);

// READ
router.get('/', getAllShippers);
router.get('/:id', getShipperById);

// UPDATE
router.put('/:id', updateShipperById);

export default router;