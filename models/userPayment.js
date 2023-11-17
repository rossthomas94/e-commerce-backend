class NewUserPaymentObject {
    constructor(data, personID, paymentId, cardNumberEn) {
      const { cardType, expirationDate, billingPostcode, cardHolderName, isPrimaryPayment, paymentNickname } = data;
      const date = new Date();
  
      this.PersonID = personID;
      this.paymentId = paymentId;
      this.cardType = cardType ;
      this.cardNumber = cardNumberEn ;
      this.expirationDate = expirationDate;
      this.billingPostcode = billingPostcode;
      this.cardHolderName = cardHolderName;
      this.insertedAt = date.toISOString().slice(0, 19).replace('T', ' ');;
      this.isPrimaryPayment = isPrimaryPayment
      this.paymentNickname = paymentNickname || '' 
    }
  
    static create(data, personID, paymentId, cardNumberEn) {
      return new NewUserPaymentObject(data, personID, paymentId, cardNumberEn );
    }
};


module.exports = {
    NewUserPaymentObject
}