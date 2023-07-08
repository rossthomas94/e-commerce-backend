const express = require('express');
const router = express.Router();

const {
  getUserByUserId,
  updateUserById,
  deleteUserById,
  createUser
} = require('../controllers/user');


router.route('/')
  .post(createUser);


router.route('/:userId')
  .get(getUserByUserId)
  .patch(updateUserById)
  .delete(deleteUserById);


  module.exports = router;