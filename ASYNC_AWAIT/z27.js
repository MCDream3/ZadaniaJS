async function getAllData() 
{
    const [users, tasks, comments] = await Promise.all([
        getUsers(),
        getTasks(),
        getComments()
    ]);

    return { users, tasks, comments };
}
