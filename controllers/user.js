const {createNewUser, getAllUsers, getUserById, validateUserData,updateUser, deleteUser, getUserByEmail, checkPasswords} = require('../services/users');



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
    const updatedUserData = await updateUser(userId);
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
    // generate a token and add it to the csv with personID, token and expiration
    res.status(200).send(PersonID);
  } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
}

const resetPassword  =  async (req, res) => {

}

module.exports = {
  createUser,
  getUsers,
  getUserByUserId,
  updateUserById,
  deleteUserById,
  attempLogin, 
  resetPassword
};