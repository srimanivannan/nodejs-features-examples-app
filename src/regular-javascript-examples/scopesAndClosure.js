function calculateStockPrice() {
    // variable scope is available with in function add
    const basePrice = 10;

    function add(tax) {
        const currentPrice = 100;
        return basePrice + currentPrice + tax;
    }

    console.log(add(1));
    return add(1);
}

console.log(calculateStockPrice());
// Closure  = combination of innerfunction + outer context
// In this example, inner function add is using outer context baseprice variable