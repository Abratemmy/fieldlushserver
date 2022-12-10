import express from "express";
import { getTestimonys, createTestimony, updateTestimony, deleteTestimony } from "../controllers/testimony.js";

const router = express.Router();


router.get('/', getTestimonys);
router.post('/', createTestimony);
router.patch('/:id', updateTestimony);
router.delete('/:id', deleteTestimony);


export default router 