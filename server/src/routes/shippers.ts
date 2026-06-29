import { Router } from "express";
import { createShipper, getAllShippers, getShipperById, updateShipperById, deleteShipperById } from "../controllers/shippers";

const router = Router();

// CREATE
router.post('/', createShipper);

// READ
router.get('/', getAllShippers);
router.get('/:id', getShipperById);

// UPDATE
router.put('/:id', updateShipperById);

// DELETE
router.delete('/:id', deleteShipperById);

export default router;