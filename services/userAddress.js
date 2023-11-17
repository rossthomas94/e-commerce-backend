const {selectUserAddressByUserId, updateAllOtherAddress, insertNewUserAddrss, selectAddressByaId, updateUAbyAId, deleteAddressByAId, getPrimaryAddress} = require('../helpers/sqlControllerUA')
const {generateAddressId} = require('../helpers/userAddressValidation')
const {NewUserAddressObject} = require('../models/userAddress')


const validateUserAddressData = async (userId, userAddressData) => {
    const {postcode, streetName, isPrimaryAddress} =  userAddressData;

    if (!postcode || !streetName) throw new Error('Please enter in an valid postcode or street name')
    if (isPrimaryAddress) await updateAllOtherAddress(userId);

    const addressId = await generateAddressId('userAddress')
    const validUserAddress = NewUserAddressObject.create(userAddressData, userId, addressId)

    return validUserAddress
};

const createNewUserAddress = async (data) => {
    const insertData = await insertNewUserAddrss(data);
    return insertData;

};

const getAllUserIdAddress = async (useriD) => {
    const usersAddresses = await selectUserAddressByUserId(useriD);
    return usersAddresses
};

const getAddressByAId = async (aId) => {
    const address = await selectAddressByaId(aId);
    return address;
};

const updateUserAddressByaId = async (userId,addressId, preAddress, changeRequest) => {
    const {isPrimaryAddress} = changeRequest;
    if (isPrimaryAddress) await updateAllOtherAddress(userId);
    const updatedAddress = { ...preAddress };
    Object.keys(changeRequest).forEach(key => {
        updatedAddress[key] = changeRequest[key];
      });
    const update = await updateUAbyAId(addressId, updatedAddress);  
    return update  
};

const deleteAddress = async (aId) => {
    const deleted = await deleteAddressByAId(aId);
    return deleted
};

const getPrimaryAddressByUId = async (UId) => {
    const primaryAddress = await getPrimaryAddress(UId)
    if (primaryAddress) return primaryAddress;
    const [usersAddresses] = await selectUserAddressByUserId(UId);
    if (usersAddresses) return usersAddresses;
    
    return 'No addresses found for User, please add an aaddress'
}

module.exports = {
    getAllUserIdAddress,
    createNewUserAddress,
    validateUserAddressData,
    getAddressByAId,
    updateUserAddressByaId,
    deleteAddress,
    getPrimaryAddressByUId
};