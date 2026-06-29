import { Router } from "express";
import { createShipper, getAllShippers, getShipperById } from "../controllers/shippers";

const router = Router();

// CREATE
router.post('/', createShipper);

// READ
router.get('/', getAllShippers);
router.get('/id', getShipperById);

export default router;