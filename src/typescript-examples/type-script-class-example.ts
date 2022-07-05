class Stock {
    private name: String;
    private price: number;

    constructor(name: String, price: number) {
        this.name = name;
        this.price = price;
    }

    calculatePrice() {
        return this.price * 0.10;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

let stock = new Stock("Amazon", 234.87);
console.log("Via Constructor: " + stock.calculatePrice());

let stock1 = new Stock("Walmart", 564.87);
stock1.setPrice("123.1");
console.log("Override setter: " + stock1.calculatePrice());