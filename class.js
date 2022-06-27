class Product {
    constructor(name, price, promotion, discount, category, lastprice) {
        this.name = name
        this.price = price
        this.promotion = promotion
        this.discount = discount
        this.category = category
        this.lastprice = lastprice
    }
}
class Category {
    constructor(Product) {
        // la propriété name de la classe category est égale/liée à la propriété category de la classe Product
        this.name = Product.category
    }
}