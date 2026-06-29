// define URL paths and HTTP methods, map to controller functions
// routes don't know about firestore/database

import { Router } from "express";
import { createLoad, getAllLoads, getLoadById, updateLoadById } from "../controllers/loads";

const router = Router();

//CREATE
router.post('/',createLoad);

// READ
router.get('/', getAllLoads);
router.get('/:id', getLoadById);

// UPDATE
router.put('/:id', updateLoadById);

export default router;