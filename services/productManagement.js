const {getAllCategoryNamesHelp, getAllProductsInCategory, addNewProductHelp, getProductData, deleteProductData } = require('../helpers/sqlControllerPM')
const {generatePId} = require('../helpers/validateProduct')
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
const updateProductInfo = async (PId) => {
    // const insertData = insertNewUser(PId );
    // return insertData;
};
const deleteProduct = async (PId) => {
    const deletedData = deleteProductData(PId );
    return deletedData;
};
const updateProductStock = async (PId) => {
    // const insertData = insertNewUser(PId );
    // return insertData;
};
const filterProducts = async () => {
    // const insertData = insertNewUser(userData );
    // return insertData;
};


module.exports =  {
    getAllCategories, 
    getProductsInCategory, 
    validateProduct,
    addNewProductToCategoryId, 
    getProductInfo, 
    updateProductInfo, 
    deleteProduct, 
    updateProductStock,
    filterProducts 
};