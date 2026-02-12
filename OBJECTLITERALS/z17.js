const cart = {
    items: [],
    add(item) {
        this.items.push(item);
    },
    remove(name) {
        this.items = this.items.filter(item => item.name !== name);
    },
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
};

cart.add({ name: 'Laptop', price: 3000 });
cart.add({ name: 'Mouse', price: 50 });
console.log(cart.getTotal());