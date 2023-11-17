const {createNewUserAddress, getAllUserIdAddress, validateUserAddressData, getAddressByAId,updateUserAddressByaId, deleteAddress, getPrimaryAddressByUId } = require('../services/userAddress');


const getUserAddressesByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const addresses = await getAllUserIdAddress(userId)
        res.status(200).send(addresses);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const createUserAddress = async (req, res) => {
    try {
        const userId = req.params.userId;
        const validUserAddress = await validateUserAddressData(userId, req.body);
        const insertAddress = await createNewUserAddress(validUserAddress)
        res.status(200).send(insertAddress);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const getUserAddressesByAddressId = async (req, res) => {
    try {
      const {addressId} = req.params 
      const address = await getAddressByAId(addressId)
        res.status(200).send(address);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const updateUserAddressByAddressId = async (req, res) => {
    try {
      const {userId, addressId} = req.params;
      const preAddress = await getAddressByAId(addressId);
      const changeRequest = req.body
      const update = await updateUserAddressByaId(userId, addressId, preAddress, changeRequest);
        res.status(200).send(update);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}
const deleteUserAddressByAddressId = async (req, res) => {
    try {
        const addressId = req.params.addressId;
        const status = await deleteAddress(addressId)
        res.status(200).send(status);
        } catch (error) {
        res.status(500).send({
          status: 'error',
          message: error.message
        });
      }
}

const getPrimaryAddress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const status = await getPrimaryAddressByUId(userId)
    res.status(200).send(status);
    } catch (error) {
    res.status(500).send({
      status: 'error',
      message: error.message
    });
  }
};

module.exports = {
    getUserAddressesByUserId,
    createUserAddress,
    getUserAddressesByAddressId,
    updateUserAddressByAddressId,
    deleteUserAddressByAddressId,
    getPrimaryAddress
}