function TaskInput() 
{
    const [task, setTask] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    const addTask = () => 
    {
        setTasks([...tasks, task]);
        setTask('');
    };

    return (
        <div>
            <input value={task} onChange={e => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
    );
}