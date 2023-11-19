const  { getAllCategoryNamesQuery, getMiniProductInfo, getProductInfo, deleteProduct,insertNewProduct, updateProductInfo, getCurrentStockProduct, checkLowStock, filterQuery} = require('./queries/productManagementQueries');
const {runSelectQuery , runInsertQuery, runSelectByQuery, runUpdateUserQuery, runDelete} = require('./sqlHandler');

const getAllCategoryNamesHelp = (CId) => {
    const result = runSelectQuery('productInfo', getAllCategoryNamesQuery(CId));
    return result;
};

const getAllProductsInCategory = (CId) => {
    const result = runSelectQuery('productInfo', getMiniProductInfo(CId));
    return result;
};

const addNewProductHelp =  async (data) => {
    const result =  await runInsertQuery('productInfo',insertNewProduct(),  data,  'New productAdded');
    return result
  };

const getProductData = async (PId) => {
    const result = await runSelectByQuery("productInfo",getProductInfo(PId));
    return result;
}

const deleteProductData = async (PId) => {
    const result = await runDelete("productInfo",deleteProduct(PId));
    return result;
}

const updateProductData = async (PId, newProductInfo) => {
    const result = await  runUpdateUserQuery('productInfo', updateProductInfo(PId), newProductInfo);
    return result;
};

const getCurrentProductStock = async (PId) => {
    const result = await runSelectByQuery("productInfo",getCurrentStockProduct(PId));
    return result;
};

const updateStockInDB = async (PId,stock) => {
    const result = await  runUpdateUserQuery('productInfo', updateProductInfo(PId), stock);
    return result;
};

const getFilterd = async (filters) => {
    const result = runSelectQuery('productInfo', filterQuery(filters));
    return result;
};

const getAllProductStock = async () => {
    const result = runSelectQuery('productInfo', checkLowStock());
    return result;
};

module.exports = {getAllCategoryNamesHelp, getAllProductsInCategory, addNewProductHelp, getProductData, deleteProductData, updateProductData, getCurrentProductStock, updateStockInDB, getFilterd, getAllProductStock}


