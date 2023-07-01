const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');


const {removeExpiredTokens} = require('./miscellaneous/tokenCleanUp')

const user = require('./routes/user');
// const userAddress = require('./routes/userAddress');

const isAuth = require('./middleware/auth')

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use('/user', isAuth, user);
// app.use('/user/address', isAuth, userAddress);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


cron.schedule('*/1 * * * *', () => {
  removeExpiredTokens();
})

module.exports = app;