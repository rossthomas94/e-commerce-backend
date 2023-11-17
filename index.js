const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const { removeExpiredTokens } = require('./miscellaneous/tokenCleanUp');

const userRouter = require('./routes/user');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const userAddressRouter = require('./routes/userAddress');
const paymentRouter = require('./routes/userPayment');


const { isAuth, basicAuthLogin, tokenAuth } = require('./middleware/auth');

const app = express();
app.use(bodyParser.json());

app.use('/users', isAuth, usersRouter);
app.use('/login', basicAuthLogin,  loginRouter);
app.use('/user', tokenAuth, userRouter);
app.use('/user/address' , tokenAuth, userAddressRouter);
app.use('/user/payment' , tokenAuth, paymentRouter);



const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

cron.schedule('*/1 * * * *', () => {
  removeExpiredTokens();
});

module.exports = app;