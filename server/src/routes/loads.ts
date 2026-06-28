// define URL paths and HTTP methods, map to controller functions
// routes don't know about firestore/database

import { Router } from "express";
import { getAllLoads } from "../controllers/loads";
import { getLoadById } from "../controllers/loads";

const router = Router();

router.get('/', getAllLoads);
router.get('/:id', getLoadById);

export default router;