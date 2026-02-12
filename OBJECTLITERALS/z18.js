function createTask(title, completed = false) 
{
    let n = 1000000;
    return {
        id: Math.floor(Math.random() * n),
        title,
        completed,
        createdAt: new Date(),
        toggle() 
        {
            this.completed = !this.completed;
        }
    };
}

const task = createTask('Learn JS');
task.toggle();
console.log(task.completed);