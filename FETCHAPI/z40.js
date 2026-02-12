async function getTasks() 
{
    const res = await fetch('/api/tasks');
    return await res.json();
}