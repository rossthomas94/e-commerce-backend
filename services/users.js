const {validateEmail, checkUserCred,  validatePassword ,securePassword, matchPasswords, updateTime} = require('../helpers/userValidation.js')
const {insertNewUser, selectAllUsers, selectUserByUserId, updateUserById, deleteUserById, getUserIdByEmail } = require('../helpers/sqlController.js');
const {generateNewToken} = require('../helpers/tokenHandler.js')


const {NewUserObject, DeleteUser} = require('../models/user')


const validateUserData = async (userData) => {
        const {userName, email, password} =  userData
        if (!validateEmail(email)) throw new Error (`invalid email address format for ${email}`)
        if (password.length < 8 || !validatePassword(password)) throw new Error (`invalid password`)

        const uniqueId = await checkUserCred(email ,userName)
        const hashPWD = await securePassword(password)
        const validUser = NewUserObject.create(userData, uniqueId, hashPWD)

        return validUser
};

const checkPasswords = async (password, sentPassword) => {
    if (password.length < 8 || !validatePassword(password)) throw new Error (`invalid password`)
    const match =  await matchPasswords(sentPassword, password )
    return match
};


const createNewUser = async (userData) => {
    const insertData = insertNewUser(userData );
    return insertData;
};

const getAllUsers = async () => {
    const allUsers = await selectAllUsers();
    return allUsers
};

const getUserById = async (id) => {
    const user = await selectUserByUserId(id);
    return user
}

const updateUser = async (newData, id) => {
    console.log(newData)
    const updatedData = updateTime(newData)
    console.log(updatedData)
    const updatedUser = await updateUserById(updatedData, id)
    return updatedUser
}

const deleteUser = async (id) => {
    const deletedData = DeleteUser.delete(id)
    const deleteUser = await deleteUserById(id, deletedData)
    return deleteUser
}

const getUserByEmail = async (email) => {
    const userId = await getUserIdByEmail(email)
    return userId
}

const getToken = async (userId) => {
    const token = generateNewToken(userId)
    return token
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    validateUserData,
    updateUser,
    deleteUser,
    getUserByEmail,
    checkPasswords,
    getToken
};