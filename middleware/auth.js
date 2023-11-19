const {checkToken} = require('../helpers/tokenHandler')

const isAuth = (req, res, next) => {
  console.log('stanard auth')
    next( )
};

const basicAuthLogin = (req, res, next) => {
  console.log('basic auth');

  if (req.originalUrl === '/login/password/forgotten') {
    return next(); 
  }

  if (!req.body.password) {
    return res.status(400).json({ error: 'No password entered' });
  }

  next();
};

  const tokenAuth = async (req, res, next) => {
    console.log('token auth')

    const token = req.headers.authorization?.split(' ')[1];
    const userId = req.body.PersonID
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const match = await checkToken(userId, token);
    if (!match) {
      return res.status(401).json({ error: 'Token is expired or invalid' });
    }
  
    next();
  };


module.exports = {isAuth, basicAuthLogin, tokenAuth}