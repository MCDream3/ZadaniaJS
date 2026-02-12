function generateHTML(tasks) 
{
    let html = '<ul>\n';

    for (let task of tasks) 
    {
        const className = task.completed ? 'completed' : '';
        html += `<li class="${className}">${task.title}</li>\n`;
    }

    html += '</ul>';

    return html;
}


const tasks = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false }
];