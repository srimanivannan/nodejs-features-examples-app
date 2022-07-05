// Example for Objects and Arrays

// stockObject is object as it has curly brackets
const stockObject = {
    name: 'amazon',
    price: 550.00,
    getPrice() {
        return stockObject.price;
    },
    exchange: ['DOW', 'Nasdaq', 'S&P'],
    earnings: {
        q1: 100,
        q2: 200,
    },
};

console.log(stockObject);
console.log(stockObject.getPrice());

// stockArray is array as it has square brackets
const stockArray = [
    'amazon',
    550.00,
    () => stockArray[1],
    ['DOW', 'Nasdaq', 'S&P'],
    {
        q1: 100,
        q2: 200,
    },
];

console.log(stockArray);
console.log(stockArray[1]);