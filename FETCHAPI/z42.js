async function deleteTask(id) 
{
    try 
    {
        const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });

        if (!res.ok) throw new Error('Delete failed');
        return true;
    }
    catch (error) 
    {
        console.error(error);
        return false;
    }
}
