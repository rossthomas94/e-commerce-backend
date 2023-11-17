const {selectUserPaymentsByUserId, updateAllOtherPayment, insertNewUserPayment, selectPaymentByPId, updatePaymentByPId, deletePaymentByPId, getPrimaryPayment} = require('../helpers/sqlControllerUP')
const {generatePaymentId, encrpytCardNumber, decryptCardNumber} = require('../helpers/userPaymentValidation')
const {NewUserPaymentObject} = require('../models/userPayment')

const getAllUserIdPayment = async (useriD) => {
    const usersPayments = await selectUserPaymentsByUserId(useriD);
    return usersPayments
};

const validateUserPaymentData = async (userId, userPaymentData) => {
    const {cardType, cardNumber, expirationDate, billingPostcode, cardHolderName, isPrimaryPayment  } =  userPaymentData;

    if (!cardType || !cardNumber || !expirationDate || !billingPostcode || !cardHolderName ) throw new Error('Please enter a valid card details');
    if (isPrimaryPayment) await updateAllOtherPayment(userId);

    const paymentId = await generatePaymentId('userPayment')
    const cardNumberEn = encrpytCardNumber(cardNumber)
    const validUserAddress = NewUserPaymentObject.create(userPaymentData, userId, paymentId, cardNumberEn)

    return validUserAddress
};

const createNewUserPayment = async (data) => {
    const insertData = await insertNewUserPayment(data);
    return insertData;
};

const getPaymentByPId = async (PId) => {
    const payment = await selectPaymentByPId(PId);
    const lastFour = decryptCardNumber(payment['cardNumber']);
    payment.lastFourDigits = lastFour;
    return payment;
};

const updateUserPaymentByPId = async (userId, paymentId, prePayment, changeRequest) => {
    const {isPrimaryPayment} = changeRequest
    if (prePayment.lastFourDigits) delete prePayment.lastFourDigits;

    if (isPrimaryPayment) await updateAllOtherPayment(userId);
    const updatedPayment = { ...prePayment };
    Object.keys(changeRequest).forEach(key => {
        updatedPayment[key] = changeRequest[key];
      });
    const update = await updatePaymentByPId(paymentId, updatedPayment);  
    return update  
};

const deletePayment = async (PId) => {
    const deleted = await deletePaymentByPId(PId);
    return deleted
};

const getPrimaryPaymentByUId = async (UId) => {
    const primaryPayment = await getPrimaryPayment(UId)
    if (primaryPayment) return primaryPayment;
    const [usersPayment] = await selectUserPaymentsByUserId(UId);
    if (usersPayment) return usersPayment;
    
    return 'No payment details found for User, please add payment details'
}

module.exports = {
    getAllUserIdPayment,
    validateUserPaymentData,
    createNewUserPayment,
    getPaymentByPId,
    updateUserPaymentByPId,
    deletePayment,
    getPrimaryPaymentByUId
};