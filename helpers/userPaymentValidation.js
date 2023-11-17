
const {generateUniqueId} = require('./sqlController')

const crypto = require('crypto');

const encryptionKey = 'supersecretkey'; 

const generatePaymentId  = () => {
    const paymentId = generateUniqueId('userPayment', 'paymentId');
    return paymentId
};

const encrpytCardNumber = (number) => {
    const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
    let encrypted = cipher.update(number, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

const decryptCardNumber = (encryptedCardNumber) => {
    const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
    let decrypted = decipher.update(encryptedCardNumber, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    const lastFour = decrypted.substring(decrypted.length - 4)
    return lastFour;
}

module.exports = {
    generatePaymentId, 
    encrpytCardNumber,
    decryptCardNumber
}
