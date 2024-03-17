// productRoutes.ts

import express from 'express';
import * as productController from '../controllers/productController';
import multer from 'multer';
import { getAllCategories } from '../controllers/productController';

const router = express.Router();
const upload = multer();

// GET all categories
router.get("/categories", getAllCategories);

// GET all products
router.get("/", productController.getAllProducts);

// GET all products without pagination
router.get("/all", productController.getAllProductsNoPagination);

// GET a single product by ID
router.get("/:id", productController.getProductById);

// for a specific user
router.get("/user/:userIP", productController.getProductsByUser);

// POST a new product
router.post("/", upload.single("image"), productController.createProduct);

// PUT update a product by ID
router.put("/:id", upload.single("image"), productController.updateProductById);

// DELETE a product by ID
router.delete("/:id", productController.deleteProductById);

export default router;
