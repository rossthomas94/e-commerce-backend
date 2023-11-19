const {checkUserName, checkUserEmail, insertUserData, getAllUsers, getUserById, checkId, updateUser, getUserByEmail, passwordReset} = require('./queries/userQueries');
const {runSelectQuery , runInsertQuery, runSelectByQuery, runUpdateUserQuery} = require('./sqlHandler');
const uuid = require('uuid');

const DB = "userInfo"

const generateUniqueId = async (table, column) => {
  let unique = false;
  let id;

  while (!unique) {
    id = uuid.v4();
    const result = await runSelectQuery(DB, checkId(table,column, id));
    if (result.length === 0) unique = true;
  }
  return id;
};


const checkUserNameExists = async (userName) => {

  const result = await runSelectQuery(DB, checkUserName(userName));
    if (result.length > 0) {
      throw new Error("UserName already exists");
    }
    return userName;
};

const checkUserEmailExists = async (userEmail) => {
  const result = await runSelectQuery(DB, checkUserEmail(userEmail));
  if (result.length > 0) {
    throw new Error('userEmail already exists');
  }
  return userEmail;
};
  
  const selectAllUsers = async () => {
    const result =  await runSelectQuery(DB, getAllUsers());
    return result
  };

  const selectUserByUserId = async (id) => {
    const result = await runSelectByQuery(DB, getUserById(id));
    return result 
  };

  const insertNewUser =  (data) => {
    const result =  runInsertQuery(DB, insertUserData(),  data,  'Create new user');
    return result
  };

  const updateUserById =  (data, id) => {
    const result =  runUpdateUserQuery(DB, updateUser(id), data);
    return result
  };
  const deleteUserById = (id, data) => {
    const result =  runUpdateUserQuery(DB, updateUser(id), data);
    return result
  }

  const getUserIdByEmail = (email) => {
    const result =  runSelectByQuery(DB, getUserByEmail(email));
    return result
  }

  const checkPasswordResetCond = (email, lastName, DOB) => {
    const result =  runSelectByQuery(DB, passwordReset(email, lastName, DOB));
    return result
  };


  module.exports = {
    selectAllUsers,
    insertNewUser,
    selectUserByUserId,
    checkUserNameExists,
    checkUserEmailExists,
    generateUniqueId,
    updateUserById,
    deleteUserById,
    getUserIdByEmail,
    checkPasswordResetCond
};