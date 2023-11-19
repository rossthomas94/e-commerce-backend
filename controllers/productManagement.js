const {getAllCategories, getProductsInCategory, addNewProductToCategoryId, getProductInfo, updateProductInfoWithId, deleteProduct, getProductStockWithId ,filterProductsSearch, validateProduct, updateProductStockService } = require('../services/productManagement')

const showAllCategories = async(req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).send(categories);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const showAllProductsInCategory = async(req, res) => {
    try {
      const caterogyId = req.params.categoryId
      const products = await getProductsInCategory(caterogyId)
      res.status(200).send(products);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const addNewProductToCategory = async(req, res) => {
    try {
        const caterogyId = req.params.categoryId
        const validateProductData =  await validateProduct(req.body, caterogyId);
        const product = await addNewProductToCategoryId(validateProductData)
      res.status(200).send(product);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const showProductInfo = async(req, res) => {
    try {
        const productId = req.params.productId
        const productInfo = await getProductInfo(productId)
      res.status(200).send(productInfo);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const updateProductInfo = async(req, res) => {
    try {
        const productId = req.params.productId
        const currentProduct = await  getProductInfo(productId);
        const updateProduct = await req.body;
        const productInfo = await updateProductInfoWithId(productId, currentProduct, updateProduct)
      res.status(200).send(productInfo);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const deleteProductInfo = async(req, res) => {
    try {
        const productId = req.params.productId
        const deletedProduct = await deleteProduct(productId)
      res.status(200).send(deletedProduct);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const showProductStock = async(req, res) => {
    try {
        const productId = req.params.productId
        const producrStock = await getProductStockWithId(productId)
      res.status(200).send(producrStock);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const updateProductStock = async(req, res) => {
    try {
        const productId = req.params.productId;
        const {addStock} = req.body;
        if (typeof addStock !== 'number') throw new Error('invalid addStock value, must be a number');
        const stock = await updateProductStockService(productId, addStock)
      res.status(200).send(stock);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

  const filterProducts = async(req, res) => {
    try {
      if (!req.body.length >= 1) throw new Error ("No filters selected!!")
      const filteredResult = await filterProductsSearch(req.body)
      res.status(200).send(filteredResult);
      } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
  };

module.exports = {
    showAllCategories,
    showAllProductsInCategory,
    addNewProductToCategory,
    showProductInfo,
    updateProductInfo,
    deleteProductInfo,
    showProductStock,
    updateProductStock,
    filterProducts
};