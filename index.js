const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const { removeExpiredTokens } = require('./miscellaneous/tokenCleanUp');
const { checkProductStock } = require('./miscellaneous/productStock');

const userRouter = require('./routes/user');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const userAddressRouter = require('./routes/userAddress');
const paymentRouter = require('./routes/userPayment');

const productManagementRouter = require('./routes/productManagement');

const { isAuth, basicAuthLogin, tokenAuth } = require('./middleware/auth');

const app = express();
app.use(bodyParser.json());

app.use('/users', isAuth, usersRouter);
app.use('/login', basicAuthLogin,  loginRouter);
app.use('/user', tokenAuth, userRouter);
app.use('/user/address' , tokenAuth, userAddressRouter);
app.use('/user/payment' , tokenAuth, paymentRouter);

app.use('/productManagement', isAuth, productManagementRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

cron.schedule('*/1 * * * *', () => {
  removeExpiredTokens();
}); 

cron.schedule('0 */12 * * *', () => {
  checkProductStock();
}); 

module.exports = app;