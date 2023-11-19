const express = require('express');
const router = express.Router();

const {
    attempLogin,
    resetPassword,
    updatePassword
  } = require('../controllers/user');

router.route('/:email')
    .post(attempLogin);

router.route('/password/forgotten')
  .post(resetPassword);

router.route('/password/update')
  .patch(updatePassword);

    module.exports = router;