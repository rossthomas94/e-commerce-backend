const {getAllCategoryNamesHelp, getAllProductsInCategory, addNewProductHelp, getProductData, deleteProductData, updateProductData, getCurrentProductStock, updateStockInDB, getFilterd } = require('../helpers/sqlControllerPM')
const {generatePId, configureFilters} = require('../helpers/validateProduct')
const { updateProductStock } = require('../miscellaneous/productStock');

const {NewProductObject} = require('../models/NewProductObject')

const getAllCategories = async () => {
    const categoryNames = await getAllCategoryNamesHelp();
    return categoryNames;
};
const getProductsInCategory = async (CId) => {
    const allProducts = await getAllProductsInCategory(CId);
    return allProducts; 
};
const validateProduct = (productInfo, CID) =>{
    const {productName, productDescription, image, productPrice } = productInfo;
    if (!productName || !productDescription  || !image || !productPrice ) throw new Error('invalid product info')
    const productId = generatePId();
    const validProduct = NewProductObject.create(productInfo, CID, productId);
    return validProduct
};
const addNewProductToCategoryId = async (data) => {
    const addNewProduct = await addNewProductHelp(data);
    return addNewProduct;
};
const getProductInfo = async (PId) => {
    const productData = getProductData(PId );
    return productData;
};
const updateProductInfoWithId = async (PId, currentProduct, updateProductInfo) => {
    const newProductInfo = { ...currentProduct};
    Object.keys(updateProductInfo).forEach(key => {
        newProductInfo[key] = updateProductInfo[key];
      });
    const updateData = updateProductData(PId, newProductInfo);
    return updateData;
};

const deleteProduct = async (PId) => {
    const deletedData = deleteProductData(PId);
    return deletedData;
};
const updateProductStockService = async (PId, newStock) => {
    const {inventory_count} = await getCurrentProductStock(PId);
    const updatedValue = inventory_count + newStock;
    const dataObject = {"inventory_count": updatedValue}
    const updateStock = await updateStockInDB(PId, dataObject)
    await updateProductStock(PId)
    return updateStock;
};

const filterProductsSearch = async (data) => {
    const filter = configureFilters(data)
    const filteredData = getFilterd(filter);
    return filteredData;
};

const getProductStockWithId = async (PID) => {
    const stock = await getCurrentProductStock(PID);
    return stock;
};

module.exports =  {
    getAllCategories, 
    getProductsInCategory, 
    validateProduct,
    addNewProductToCategoryId, 
    getProductInfo, 
    updateProductInfoWithId, 
    deleteProduct, 
    updateProductStockService,
    filterProductsSearch,
    getProductStockWithId
};