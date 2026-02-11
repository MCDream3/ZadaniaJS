function displayTask({ title, completed = false, priority = 'low' }) 
{
    console.log(`Task: ${title} | Done: ${completed} | Priority: ${priority}`);
}

displayTask({ title: 'Learn JS', completed: true });
displayTask({ title: 'Write code' });