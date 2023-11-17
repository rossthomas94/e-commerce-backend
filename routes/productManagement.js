const express = require('express');
const router = express.Router();

const {
    showAllCategories,
    showAllProductsInCategory,
    addNewProductToCategory,
    showProductInfo,
    updateProductInfo,
    deleteProductInfo,
    showProductStock,
    updateProductStock,
    filterProducts
  } = require('../controllers/productManagement');

router.route('/')
  .get(showAllCategories)

router.route('/:categoryId')
    .get(showAllProductsInCategory)
    .post(addNewProductToCategory);

router.route('/product/:productId')
    .get(showProductInfo)
    .patch(updateProductInfo)
    .delete(deleteProductInfo); 

router.route('/product/:productId/stock')
    .get(showProductStock)
    .patch(updateProductStock);

router.route('/product/search')
    .get(filterProducts)

module.exports = router;