class NewUserObject {
    constructor(data, personID, securePWD) {
      const { email, LastName, FirstName, userName, DOB, password } = data;
      const date = new Date();
  
      this.PersonID = personID;
      this.LastName = LastName || '';
      this.FirstName = FirstName || '';
      this.userName = userName || '';
      this.password = securePWD ;
      this.email = email || '';
      this.DOB = DOB || '';
      this.addressExists = 0;
      this.paymentExists = 0;
      this.status = 'active';
      this.createdAt = date.toISOString().slice(0, 19).replace('T', ' ');
      this.modifiedAt = this.createdAt;
      this.deletedAccount = 0;
    }
  
    static create(data, personID, securePWD) {
      return new NewUserObject(data, personID, securePWD);
    }
  }

 class DeleteUser {
    constructor(personID){
        const date = new Date();
        this.PersonID = personID;
        this.LastName =  '';
        this.FirstName =  '';
        this.userName = '';
        this.password =  '';
        this.email = '';
        this.DOB = '';
        this.addressExists = 0;
        this.paymentExists = 0;
        this.status = 'inactive';
        this.modifiedAt = date.toISOString().slice(0, 19).replace('T', ' ');
        this.deletedAccount = 1;
    }

    static delete(personID) {
        return new DeleteUser(personID);
      }
 }   

module.exports = {
    NewUserObject,
    DeleteUser
}