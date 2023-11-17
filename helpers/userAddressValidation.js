const {generateUniqueId} = require('./sqlController')

const generateAddressId  = () => {
    console.log('yes')
    const addressId = generateUniqueId('userAddress', 'addressId');
    return addressId
};

module.exports = {
    generateAddressId
}
