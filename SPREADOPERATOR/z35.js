function updateTask(tasks, taskId, updates) 
{
    return tasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
    );
}