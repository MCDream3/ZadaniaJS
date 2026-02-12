function getDiscount(price, customerType) 
{
    if (customerType === 'vip') return price * 0.8;
    if (customerType === 'regular') return price * 0.9;
    return price;
}

console.log(getDiscount(100, 'vip'));
console.log(getDiscount(100, 'regular'));