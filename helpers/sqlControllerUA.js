const {getUserAddressesByUid, updatePrimaryAddress, insertUserAddressData, getUserAddressesByaId, updateUserAddressQuery, deleteAddress, getPrimaryAddressQuery } = require('./queries/userAddressQueries');
const {runSelectQuery , runInsertQuery, runSelectByQuery, runUpdateUserQuery, runDelete} = require('./sqlHandler');


const selectUserAddressByUserId = async (id) => {
    const result = await runSelectQuery("userInfo", getUserAddressesByUid(id));
    return result 
  };

const updateAllOtherAddress = async (uId) => {
  const result = await runUpdateUserQuery("userInfo", updatePrimaryAddress(uId));
  return result 
}

const insertNewUserAddrss =  async (data) => {
  const result =  await runInsertQuery(insertUserAddressData(),  data,  'Create new user address');
  return result
};

const selectAddressByaId = async (aId) => {
  const result = await runSelectByQuery("userInfo",getUserAddressesByaId(aId));
  return result;
};

const updateUAbyAId = async (aId, data) => {
  const result = await runUpdateUserQuery('userInfo', updateUserAddressQuery(aId), data);
  return result;
};

const deleteAddressByAId = async (aId) => {
  const result = await runDelete('userInfo', deleteAddress(aId));
  return result;
};
const getPrimaryAddress = async (UId) => {
  const result = await runSelectByQuery("userInfo",getPrimaryAddressQuery(UId));
  return result;
}

module.exports = {
  selectUserAddressByUserId,
    updateAllOtherAddress,
    insertNewUserAddrss,
    selectAddressByaId,
    updateUAbyAId,
    deleteAddressByAId,
    getPrimaryAddress
};