function processArray(arr, callback) 
{
    const result = [];
    for (let i of arr)
    {
        result.push(callback(i));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (n) => n * 2);
console.log(doubled);