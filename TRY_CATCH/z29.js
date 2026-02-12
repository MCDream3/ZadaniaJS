async function safeParseJSON(jsonString) 
{
    try 
    {
        const data = JSON.parse(jsonString);
        return { success: true, data };
    } 
    catch (error) 
    {
        return { success: false, error: error.message };
    }
}