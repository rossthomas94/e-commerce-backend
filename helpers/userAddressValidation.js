const {generateUniqueId} = require('./sqlController')

const generateAddressId  = () => {
    const addressId = generateUniqueId('userAddress', 'addressId');
    return addressId
};

module.exports = {
    generateAddressId
}
