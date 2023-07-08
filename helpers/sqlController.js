const {checkUserName, checkUserEmail, insertUserData, getAllUsers, getUserById, checkId, updateUser, getUserByEmail} = require('./queries/userQueries');
const {runSelectQuery , runInsertQuery, runSelectByQuery, runUpdateUserQuery} = require('./sqlHandler');
const uuid = require('uuid');


const generateUniqueId = async () => {
  let unique = false;
  let id;

  while (!unique) {
    id = uuid.v4();
    const result = await runSelectQuery("userInfo", checkId(id));
    if (result.length === 0) unique = true;
  }

  return id;
};


const checkUserNameExists = async (userName) => {

  const result = await runSelectQuery("userInfo", checkUserName(userName));
    if (result.length > 0) {
      throw new Error("UserName already exists");
    }
    return userName;
};

const checkUserEmailExists = async (userEmail) => {
  const result = await runSelectQuery("userInfo", checkUserEmail(userEmail));
  if (result.length > 0) {
    throw new Error('userEmail already exists');
  }
  return userEmail;
};
  
  const selectAllUsers = async () => {
    const result =  await runSelectQuery("userInfo", getAllUsers());
    return result
  };

  const selectUserByUserId = async (id) => {
    const result = await runSelectByQuery("userInfo", getUserById(id));
    return result 
  };

  const insertNewUser =  (data) => {
    const result =  runInsertQuery(insertUserData(),  data,  'Create new user');
    return result
  };

  const updateUserById =  (data, id) => {
    const result =  runUpdateUserQuery("userInfo", updateUser(id), data);
    return result
  };
  const deleteUserById = (id, data) => {
    const result =  runUpdateUserQuery("userInfo", updateUser(id), data);
    return result
  }

  const getUserIdByEmail = (email) => {
    const result =  runSelectByQuery("userInfo", getUserByEmail(email));
    return result
  }


  module.exports = {
    selectAllUsers,
    insertNewUser,
    selectUserByUserId,
    checkUserNameExists,
    checkUserEmailExists,
    generateUniqueId,
    updateUserById,
    deleteUserById,
    getUserIdByEmail
};