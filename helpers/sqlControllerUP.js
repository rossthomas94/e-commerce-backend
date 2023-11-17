const {getUserPaymentsByUid, updatePrimaryPayment, insertUserPaymentData, getUserPaymentByPId, updateUserPaymentQuery, deletePayment, getPrimaryPaymentQuery } = require('./queries/userPaymentQueries');
const {runSelectQuery , runInsertQuery, runSelectByQuery, runUpdateUserQuery, runDelete} = require('./sqlHandler');

const selectUserPaymentsByUserId = async (id) => {
    const result = await runSelectQuery("userInfo", getUserPaymentsByUid(id));
    return result 
  };
  const updateAllOtherPayment = async (uId) => {
    const result = await runUpdateUserQuery("userInfo", updatePrimaryPayment(uId));
    return result 
  }
  
  const insertNewUserPayment =  async (data) => {
    const result =  await runInsertQuery(insertUserPaymentData(),  data,  'Create new user payment');
    return result
  };
  
  const selectPaymentByPId = async (PId) => {
    const result = await runSelectByQuery("userInfo",getUserPaymentByPId(PId));
    return result;
  };
  
  const updatePaymentByPId = async (PId, data) => {
    const result = await runUpdateUserQuery('userInfo', updateUserPaymentQuery(PId), data);
    return result;
  };
  
  const deletePaymentByPId = async (PId) => {
    const result = await runDelete('userInfo', deletePayment(PId));
    return result;
  };
  const getPrimaryPayment = async (UId) => {
    const result = await runSelectByQuery("userInfo",getPrimaryPaymentQuery(UId));
    return result;
  }
  
  module.exports = {
    selectUserPaymentsByUserId,
    updateAllOtherPayment,
    insertNewUserPayment,
    selectPaymentByPId,
    updatePaymentByPId,
    deletePaymentByPId,
    getPrimaryPayment
  };
