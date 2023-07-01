const express = require('express');

const {createUser, getUsers, getUserByUserId, updateUserById, deleteUserById, attempLogin, resetPassword} = require('../controllers/user');

const router = express.Router();

router
  .route("/")
  .get(getUsers)
  .post(createUser);

router
  .route("/:userId")
  .get(getUserByUserId)
  .patch(updateUserById)
  .delete(deleteUserById);

router
  .route("/login/:email")
  .post(attempLogin)

  router
  .route("/forgotten-password/:userId")
  .post(resetPassword)


module.exports = router;