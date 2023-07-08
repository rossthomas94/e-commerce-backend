const express = require('express');
const router = express.Router();

const {
    getUserAddressesByUserId,
    createUserAddress,
    getUserAddressesByAddressId,
    updateUserAddressByAddressId,
    deleteUserAddressByAddressId
  } = require('../controllers/userAddress');

router.route('/:userId')
  .get(getUserAddressesByUserId)
  .post(createUserAddress)

router.route('/:userId/:addressId')
    .get(getUserAddressesByAddressId)
    .patch(updateUserAddressByAddressId)
    .delete(deleteUserAddressByAddressId);

module.exports = router;