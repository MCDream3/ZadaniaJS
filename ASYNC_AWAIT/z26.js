async function delay(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUserData(userId) 
{
    await delay(1000);
    return { id: userId, name: `User${userId}` };
}