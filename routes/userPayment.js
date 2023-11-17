const express = require('express');
const router = express.Router();

const {
    getUserpaymentesByUserId,
    createUserpayment,
    getUserPaymentByPaymentId,
    updateUserpaymentByPaymentId,
    deleteUserPaymentByPaymentId,
    getPrimaryPayment
  } = require('../controllers/userPayment');

router.route('/:userId')
  .get(getUserpaymentesByUserId)
  .post(createUserpayment)

router.route('/:userId/primary')
  .get(getPrimaryPayment)

router.route('/:userId/:paymentId')
    .get(getUserPaymentByPaymentId)
    .patch(updateUserpaymentByPaymentId)
    .delete(deleteUserPaymentByPaymentId);

module.exports = router;