import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryController, crateCategoryController, deletecategoryController, singlecategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router()

// routes
// create category
router.post('/create-category', requireSignIn, isAdmin, crateCategoryController )

// update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

// get All category 
router.get('/get-category', categoryController);

// get single category
router.get('/single-category/:slug', singlecategoryController);

// get single category
router.delete('/delete-category/:id', deletecategoryController);

export default router