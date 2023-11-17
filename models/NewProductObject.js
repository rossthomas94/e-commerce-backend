class NewProductObject {
    constructor(productInfo, CID, productId) {
        const { productName, categoryName, productDescription, image, productPrice ,inventory_count } = productInfo;
        const date = new Date();
        this.productId = productId,
        this.categoryId = CID,
        this.productName = productName;
        this.categoryName = categoryName || '' ;
        this.productDescription = productDescription;
        this.image = image ;
        this.productPrice = productPrice;
        this.inventory_count = inventory_count || 0;
        this.created_at = date.toISOString().slice(0, 19).replace('T', ' ');;
    }
  
    static create(productInfo, CID, productId) {
        return new NewProductObject(productInfo, CID, productId);
    }
};


module.exports = {
    NewProductObject
}