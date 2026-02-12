function formatPrice(product) 
{
    const brutto = product.price * 1.23;
    return `${product.name}: ${brutto.toFixed(2)} PLN (brutto)`;
}

const product = { name: 'Laptop', price: 3000 };