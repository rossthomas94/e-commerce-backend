const getUserAddressesByUid = (id) => `SELECT * FROM userAddress WHERE PersonID like '${id}'`

const updatePrimaryAddress = (id) =>  `UPDATE userAddress SET isPrimaryAddress = false WHERE PersonID like '${id}';`

const insertUserAddressData = () =>  'INSERT INTO userAddress SET ?';

const getUserAddressesByaId = (aId) => `SELECT * FROM userAddress WHERE addressId LIKE '${aId}';`

const updateUserAddressQuery = (aId) => `UPDATE userAddress SET ? WHERE addressId like '${aId}';`

const deleteAddress = (aId) => `DELETE FROM userAddress WHERE addressId LIKE '${aId}';`

const getPrimaryAddressQuery = (id) => `SELECT * FROM userAddress WHERE PersonId like '${id}' AND isPrimaryAddress = true`

module.exports = {
    getUserAddressesByUid,
    updatePrimaryAddress,
    insertUserAddressData,
    getUserAddressesByaId,
    updateUserAddressQuery,
    deleteAddress,
    getPrimaryAddressQuery
}