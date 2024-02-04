import Task from "../Task/Task"

import "./style.css"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return(
       <div className="task-container">
        {tasks.map((task)=>(
            <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
       </div>
    )
}
export default Tasks