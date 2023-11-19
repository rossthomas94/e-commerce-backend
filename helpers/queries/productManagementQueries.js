const getAllCategoryNamesQuery = () => `SELECT DISTINCT(categoryName) FROM Product`

const getMiniProductInfo = (CID) => `SELECT productId, productName, image, productPrice FROM Product WHERE categoryId LIKE '${CID}'`

const getProductInfo = (PID) => `SELECT productName, productDescription, image, productPrice FROM Product WHERE productId = ${PID}`

const deleteProduct = (PID) => `DELETE FROM Product WHERE productId = ${PID}`

const insertNewProduct = () => `INSERT INTO Product SET ?`;

const updateProductInfo = (PID) => `UPDATE Product SET ? WHERE productId = ${PID};`

const getCurrentStockProduct =  (PID) => `SELECT inventory_count FROM PRODUCT WHERE productId = ${PID}`

const checkLowStock = () => `SELECT productId, inventory_count FROM PRODUCT WHERE inventory_count <= 4;`

const filterQuery = (filters) => `SELECT productId, productName, image, productPrice FROM PRODUCT WHERE ${filters};`

module.exports ={
    getAllCategoryNamesQuery,
    getMiniProductInfo,
    getProductInfo,
    deleteProduct,
    insertNewProduct,
    updateProductInfo,
    getCurrentStockProduct,
    checkLowStock,
    filterQuery
};