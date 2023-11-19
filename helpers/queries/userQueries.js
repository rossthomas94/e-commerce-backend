const checkUserName = (userName) => `SELECT userName FROM user WHERE userName LIKE '%${userName}%'`;

const checkUserEmail = (email) => `SELECT email FROM user WHERE email LIKE '%${email}%'`;

const checkId = (table, id) => `SELECT PersonID FROM ${table} WHERE PersonID LIKE '%${id}%'`;

const insertUserData = () =>  'INSERT INTO user SET ?';

const getAllUsers = () => 'SELECT * FROM user where status like \"active\"'

const getUserById = (id) => `SELECT * FROM user WHERE PersonID like '${id}'`

const updateUser = (id) => `UPDATE user SET ? WHERE PersonID like '${id}';`

const getUserByEmail = (email) =>  `SELECT PersonID, password FROM user WHERE email like '%${email}%'`

const passwordReset = (email, lastName, DOB) => `SELECT PersonID FROM user WHERE email like '%${email}% AND LastName like '%${lastName}%' AND DOB like '%${DOB}%'`

module.exports = {
    checkUserName,
    checkUserEmail,
    insertUserData,
    getAllUsers,
    getUserById,
    checkId,
    updateUser,
    getUserByEmail,
    passwordReset
};