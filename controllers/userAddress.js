const getUserAddressesByUserId = async (req, res) => {
    try {
        res.status(200).send();
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const createUserAddress = async (req, res) => {
    try {
        res.status(200).send();
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const getUserAddressesByAddressId = async (req, res) => {
    try {
        res.status(200).send();
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const updateUserAddressByAddressId = async (req, res) => {
    try {
        res.status(200).send();
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const deleteUserAddressByAddressId = async (req, res) => {
    try {
        res.status(200).send();
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}

module.exports = {
    getUserAddressesByUserId,
    createUserAddress,
    getUserAddressesByAddressId,
    updateUserAddressByAddressId,
    deleteUserAddressByAddressId
}