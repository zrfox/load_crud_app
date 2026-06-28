import { Router } from "express";
import { getAllShippers, getShipperById } from "../controllers/shippers";

const router = Router();

router.get('/', getAllShippers);
router.get('/id', getShipperById);

export default router;