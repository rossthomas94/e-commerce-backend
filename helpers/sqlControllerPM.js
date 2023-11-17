const  { getAllCategoryNamesQuery, getMiniProductInfo, getProductInfo, deleteProduct,insertNewProduct, updateProductInfo} = require('./queries/productManagementQueries');
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

module.exports = {getAllCategoryNamesHelp, getAllProductsInCategory, addNewProductHelp, getProductData, deleteProductData}


