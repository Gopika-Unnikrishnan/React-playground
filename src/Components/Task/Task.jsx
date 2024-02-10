import { FaTimes } from 'react-icons/fa'
import "./style.css"

const Task = ({task, onDelete, onToggle}) => {

    return (
        <div
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick={()=> onToggle(task.id)}
        >
            <h3>{task.task}
            <FaTimes
            style={{color:"red",cursor:'pointer'}}
            onClick={() => onDelete(task.id)}
            />
            </h3>
            <p>{task.day}</p>
            <p>{task.mssg}</p>
            
        </div>
    )
}
export default Task