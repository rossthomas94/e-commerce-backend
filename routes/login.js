const express = require('express');
const router = express.Router();

const {
    attempLogin,
    resetPassword,
  } = require('../controllers/user');

router.route('/:email')
    .post(attempLogin);

router.route('/forgotten-password/')
  .post(resetPassword);

    module.exports = router;