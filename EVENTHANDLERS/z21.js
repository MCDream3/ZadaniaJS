class TaskNotifier extends EventEmitter 
{
    taskCreated(task) 
    {
        this.emit('task.created', task);
    }
    taskCompleted(id) 
    {
        this.emit('task.completed', id);
    }
    taskDeleted(id) 
    {
        this.emit('task.deleted', id);
    }
}
