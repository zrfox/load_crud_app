// define URL paths and HTTP methods, map to controller functions
// routes don't know about firestore/database

import { Router } from "express";
import { createLoad, getAllLoads, getLoadById, updateLoadById, deleteLoadById } from "../controllers/loads";

const router = Router();

//CREATE
router.post('/',createLoad);

// READ
router.get('/', getAllLoads);
router.get('/:id', getLoadById);

// UPDATE
router.put('/:id', updateLoadById);

// DELETE
router.delete('/:id', deleteLoadById);

export default router;