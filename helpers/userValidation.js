const bcrypt = require('bcrypt');

const {checkUserNameExists, checkUserEmailExists, generateUniqueId} = require('../helpers/sqlController.js');


const checkUserCred = async (userEmail, userName) => {
  await Promise.all([checkUserEmailExists(userEmail), checkUserNameExists(userName)]);
  const id = generateUniqueId('user', 'PersonID');
  return id;
};

const validateEmail =  (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
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
  return hashedPassword;
}

const matchPasswords = async (sentPassword, storedPassword, ) => {
  const match = await bcrypt.compare(sentPassword, storedPassword);
  return match
}
const updateTime = (data) => {
  const date = new Date();
  data.modifiedAt = date.toISOString().slice(0, 19).replace('T', ' ');
  return data;
};

const generateRandomPassword = () => {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  
  let randomString = '';

  randomString += upperChars.charAt(Math.floor(Math.random() * upperChars.length));

  randomString += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));

  randomString += numberChars.charAt(Math.floor(Math.random() * numberChars.length));

  const remainingChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
      randomString += remainingChars.charAt(Math.floor(Math.random() * remainingChars.length));
  }
  
  randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');

  return randomString;
};


  module.exports = {
    validateEmail,
    checkUserCred,
    securePassword,
    validatePassword,
    matchPasswords,
    updateTime,
    generateRandomPassword, 
};