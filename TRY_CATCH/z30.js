async function retryOperation(operation, maxRetries = 3) 
{
    for (let i = 0; i < maxRetries; i++) 
    {
        try 
        {
            return await operation();
        } 
        catch (err) 
        {
            if (i === maxRetries - 1) throw err;
        }
    }
}
