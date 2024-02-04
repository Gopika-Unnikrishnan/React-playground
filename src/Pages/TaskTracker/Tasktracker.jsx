import { useState, useEffect } from 'react'
import Tasks from '../../Components/Tasks/Tasks'

const TaskTracker = () => {
    const [tasks,setTasks] = useState([])
    const fetchTask = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = res.json()
        return data
    }
    const onDelete = async(id) => {
        console.log("deleted",id)
    }
    const onToggle = async(id) => {
        console.log("toggled",id)
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
            <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
        </div>
    )
}

export default TaskTracker