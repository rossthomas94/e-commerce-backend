const express = require('express');
const router = express.Router();

const {
  getUserByUserId,
  updateUserById,
  deleteUserById,
} = require('../controllers/user');

router.route('/:userId')
  .get(getUserByUserId)
  .patch(updateUserById)
  .delete(deleteUserById);


  module.exports = router;