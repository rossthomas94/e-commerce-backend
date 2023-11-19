const {createNewUser, getAllUsers, getUserById, validateUserData, updateUser, deleteUser, getUserByEmail, checkPasswords, getToken, createRandonPWD, validatePWD} = require('../services/users');



const createUser = async (req, res) => {

  try {
    const {email, userName} =  req.body;
    if (!email || !userName) throw new Error(`either an email or userName is not entered - email: ${email} user: ${userName}`);
    const validUser = await validateUserData (req.body);
    const insertUser = await createNewUser(validUser)
    res.status(200).send(insertUser);
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }

};

const getUsers = async(req, res) => {
  try {
    const users = await getAllUsers(); 
    res.status(200).send(users);
    } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
};

const getUserByUserId = async (req, res) => {
  try {
    const userId = req.params.userId
    const user = await getUserById(userId); 

    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
};

const updateUserById = async (req, res) => {

  try {
    const userId = req.params.userId
    const user = await getUserById(userId); 
    if (!user) {
      return res.status(404).send('User not found');
    }
    const {...updatedBody} = req.body;

    const updatedUserData = await updateUser(updatedBody, userId);
    res.status(200).send(updatedUserData);
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }

};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId
    const user = await getUserById(userId); 
    if (!user) {
      return res.status(404).send('User not found');
    }
    const deletedUser = await deleteUser( userId);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
}

const attempLogin =  async (req, res) => {
  try {
    const email = req.params.email
    const {PersonID, password} = await getUserByEmail(email); 
    const login = await checkPasswords(password, req.body.password)
    if (!login) return res.status(404).send('Password is incorrect');
    const token = await getToken(PersonID)
    res.status(200).json({
      userId: PersonID,
      token: token
    });  
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
}

const resetPassword =  async (req, res) => {
  try {
    const personId = checkUserInfo(req.body)
    const updatedBody = createRandonPWD()
    const PWD = updatedBody.string;
    delete updatedBody.string;
    await updateUser(updatedBody, userId);
    res.status(200).json({
      userId: personId,
      newPassword: PWD
    });  
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
};

const updatePassword = async (res, req) => {

    try {
      const userId = req.params.userId
      const user = await getUserById(userId); 
      if (!user) {
        return res.status(404).send('User not found');
      };
      const {email, savedPWD  = password} = user;
      const login = await checkPasswords(savedPWD, req.body.currentPWD)
      if (!login) return res.status(404).send('Password is incorrect');
      const newPWD = validatePWD(req.body)
      const data = {"password": newPWD}
      await updateUser(data, userId);
      res.status(200).send('Passowrd updated successfully');
    } catch (error) {
      res.status(500).send({
        status: 'error',
        message: error.message
      });
    }
};

module.exports = {
  createUser,
  getUsers,
  getUserByUserId,
  updateUserById,
  deleteUserById,
  attempLogin, 
  resetPassword,
  updatePassword
};