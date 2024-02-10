import { useState, useEffect } from 'react'
import Tasks from '../../Components/Tasks/Tasks'
import AddTask from '../../Components/AddTask/AddTask'
import "./style.css"

const TaskTracker = () => {
    const [tasks,setTasks] = useState([])
    const fetchTask = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }

    const addTask = async(task) => {
        const res = await fetch("http://localhost:5000/tasks",
        {
            method : "POST",
            headers : {
                'content-type':'application/json',
            },
            body:JSON.stringify(task)
        }
        )
        const data = await res.json()
        setTasks([...tasks,data])
    }
    const onDelete = async(id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method : "DELETE"
        }
        ) 
        res.status === 200 ? setTasks(tasks.filter((task)=> task.id !== id))
        : alert("an issue occured during delete!!!!!")
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
        <div className='task-container'>
            <h1>Task</h1>
            <AddTask addTask={addTask}/>
            <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
        </div>
    )
}

export default TaskTracker