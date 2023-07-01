const bcrypt = require('bcrypt');

const {checkUserNameExists, checkUserEmailExists, generateUniqueId} = require('../helpers/sqlController.js');


const checkUserCred = async (userEmail, userName) => {
  await Promise.all([checkUserEmailExists(userEmail), checkUserNameExists(userName)]);
  const id = generateUniqueId();
  return id;
};

const validateEmail =  (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const  validatePassword = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
  
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
  
    return hasLowercase && hasUppercase && hasNumber;
  }

const securePassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword
}

const matchPasswords = async (sentPassword, storedPassword, ) => {
  const match = await bcrypt.compare(sentPassword, storedPassword);
  return match
}
  
  module.exports = {
    validateEmail,
    checkUserCred,
    securePassword,
    validatePassword,
    matchPasswords
};