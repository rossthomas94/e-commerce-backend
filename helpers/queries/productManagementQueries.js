const getAllCategoryNamesQuery = () => `SELECT DISTINCT(categoryName) FROM Product`

const getMiniProductInfo = (CID) => `SELECT productName, image, productPrice FROM Product WHERE categoryId LIKE '${CID}'`

const getProductInfo = (PID) => `SELECT productName, productDescription, image, productPrice FROM Product WHERE productId = ${PID}`

const deleteProduct = (PID) => `DELETE FROM Product WHERE productId = ${PID}`

const insertNewProduct = () => `INSERT INTO Product SET ?`;

const updateProductInfo = (PID) => `UPDATE Product SET ? WHERE productId like '${PID}';`

module.exports ={
    getAllCategoryNamesQuery,
    getMiniProductInfo,
    getProductInfo,
    deleteProduct,
    insertNewProduct,
    updateProductInfo
};