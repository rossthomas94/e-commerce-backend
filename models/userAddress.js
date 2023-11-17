class NewUserAddressObject {
    constructor(data, personID, addressId) {
      const { houseNumber, streetName, city, postcode, isPrimaryAddress, addressNickname } = data;
      const date = new Date();
  
      this.PersonID = personID;
      this.addressId = addressId;
      this.houseNumber = houseNumber || '';
      this.streetName = streetName ;
      this.city = city || '';
      this.postcode = postcode;
      this.insertedAt = date.toISOString().slice(0, 19).replace('T', ' ');;
      this.isPrimaryAddress = isPrimaryAddress
      this.addressNickname = addressNickname || '' 
    }
  
    static create(data, personID, addressId) {
      return new NewUserAddressObject(data, personID, addressId);
    }
};


module.exports = {
    NewUserAddressObject
}