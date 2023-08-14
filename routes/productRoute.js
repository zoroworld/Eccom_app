import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

import { 
    brainTreePaymentsController,
    brainTreeTokenController,
    createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController, 
    productCategoryController, 
    productCountController, 
    productFilterController, 
    productListController, 
    productPhotoController, 
    relatedProductControler, 
    searchProductController, 
    updateProductController } from '../controllers/productController.js'

import formidable from 'express-formidable'


const router = express.Router()

// routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController );

// routes
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController );

// get all products
router.get('/get-product', getProductController);

// single products
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete products
router.delete('/del-product/:pid', deleteProductController);

// filter producs
router.post('/product-filters', productFilterController);

//product count 
router.get('/product-count', productCountController);

// product per page
router.get('/product-list/:page', productListController);

// search product 
router.get('/search/:keyword', searchProductController);

// similar product 
router.get('/related-product/:pid/:cid', relatedProductControler);

// category wise product
router.get('/product-category/:slug', productCategoryController);

// payment gateway route 
// token
router.get('/braintree/token', brainTreeTokenController);

// payments
router.post('/braintree/payment', requireSignIn, brainTreePaymentsController);





export default router