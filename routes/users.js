const express = require('express');
const router = express.Router();

const { createUser, getUsers } = require('../controllers/user');

router.route('/')
  .get(getUsers)

router.route('/new')
  .post(createUser);

module.exports = router;