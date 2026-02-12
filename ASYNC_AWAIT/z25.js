async function delay(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

await delay(2000);
console.log('Po 2s');