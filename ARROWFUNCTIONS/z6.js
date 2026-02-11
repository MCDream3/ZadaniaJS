const createMultiplier = (n) => (x) => x * n;

const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(3));