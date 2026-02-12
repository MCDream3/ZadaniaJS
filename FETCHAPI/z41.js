async function createTask(title) 
{
    const res = await fetch('/api/tasks', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    return await res.json();
}