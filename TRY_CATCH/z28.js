function safeDivide(a, b) 
{
    try 
    {
        if (b === 0) 
        {
            throw new Error('Division by zero');
        }
        return a / b;
    } 
    catch (error) 
    {
        return `Error: ${error.message}`;
    }
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));