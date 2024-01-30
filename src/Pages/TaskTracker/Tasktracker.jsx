import { useState, useEffect } from 'react'

const TaskTracker = () => {
    const [tasks,setTasks] = useState([])
    const fetchTask = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = res.json()
        return data
    }
    useEffect(() => {
        const getTask = async () => {
            const tasksFromServer = await fetchTask()
            setTasks(tasksFromServer)
        }
        getTask()
    }, [])
    return (
        <div>
            <h1>Task</h1>
            <ol>
                {tasks.map(task=>(
                    <li>
                        {task.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default TaskTracker