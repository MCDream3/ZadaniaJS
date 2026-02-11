const db = 
{
    connect() 
    {
        console.log('Połączono z bazą');
    },
    disconnect() 
    {
        console.log('Rozłączono');
    },
    query(sql) 
    {
        console.log(`Wykonuje się: ${sql}`);
        return [];
    }
};

module.exports = db;
