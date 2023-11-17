const getUserPaymentsByUid = (id) => `SELECT * FROM userPayment WHERE PersonID like '${id}'`

const updatePrimaryPayment = (id) =>  `UPDATE userPayment SET isPrimaryPayment = false WHERE PersonID like '${id}';`

const insertUserPaymentData = () =>  'INSERT INTO userPayment SET ?';

const getUserPaymentByPId = (PId) => `SELECT * FROM userPayment WHERE paymentId LIKE '${PId}';`

const updateUserPaymentQuery = (PId) => `UPDATE userPayment SET ? WHERE paymentId like '${PId}';`

const deletePayment = (PId) => `DELETE FROM userPayment WHERE paymentId LIKE '${PId}';`

const getPrimaryPaymentQuery = (id) => `SELECT * FROM userPayment WHERE PersonId like '${id}' AND isPrimaryPayment = true`

module.exports = {
    getUserPaymentsByUid,
    updatePrimaryPayment,
    insertUserPaymentData,
    getUserPaymentByPId,
    updateUserPaymentQuery,
    deletePayment,
    getPrimaryPaymentQuery
}