function validateTask(task) 
{
    const errors = [];

    if (!task.title || typeof task.title !== 'string' || task.title.length < 3)
        errors.push('Niepoprawny tytuł');

    if (typeof task.completed !== 'boolean')
        errors.push('Completed musi być true/false');

    return { valid: errors.length === 0, errors };
}

console.log(validateTask({ title: 'OK', completed: true }));