const products = [
    { name: 'Laptop', price: 3000 },
    { name: 'Mouse', price: 50 },
    { name: 'USB', price: 20 }
];

const cheapNames = products.filter(p => p.price < 100).map(p => p.name);