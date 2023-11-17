const {getAllUserIdPayment, validateUserPaymentData, createNewUserPayment, getPaymentByPId, updateUserPaymentByPId, getPrimaryPaymentByUId, deletePayment} = require('../services/userPayment')

const getUserpaymentesByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const paymentes = await getAllUserIdPayment(userId)
        res.status(200).send(paymentes);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const createUserpayment = async (req, res) => {
    try {
        const userId = req.params.userId;
        const validUserPayment = await validateUserPaymentData(userId, req.body);
        const insertPayment = await createNewUserPayment(validUserPayment)
        res.status(200).send(insertPayment);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}

const getUserPaymentByPaymentId = async (req, res) => {
    try {
      const {paymentId} = req.params 
      const payment = await getPaymentByPId(paymentId)      
        res.status(200).send(payment);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const updateUserpaymentByPaymentId = async (req, res) => {
    try {
      const {userId, paymentId} = req.params;
      const prePayment = await getPaymentByPId(paymentId);
      const changeRequest = req.body
      const update = await updateUserPaymentByPId(userId, paymentId, prePayment, changeRequest);
        res.status(200).send(update);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const deleteUserPaymentByPaymentId = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const status = await deletePayment(paymentId)
        res.status(200).send(status);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}

const getPrimaryPayment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const status = await getPrimaryPaymentByUId(userId)
    res.status(200).send(status);
    } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
};

module.exports = {
    getUserpaymentesByUserId,
    createUserpayment,
    getUserPaymentByPaymentId,
    updateUserpaymentByPaymentId,
    deleteUserPaymentByPaymentId,
    getPrimaryPayment
}