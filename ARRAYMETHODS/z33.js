const tasks = [
    { id: 1, title: 'A', completed: true },
    { id: 2, title: 'B', completed: false }
];

function groupByStatus(tasks) 
{
    return {
        completed: tasks.filter(t => t.completed),
        pending: tasks.filter(t => !t.completed)
    };
}
