import express from "express";
import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/products.js";

const router = express.Router();

router.get('/:name', getProduct)

router.get('/', getProducts);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router 