import { Button } from "react-bootstrap"
import "./style.css"
import { useState } from "react"

const AddTask = ({addTask}) => {
    const [task, setTask] = useState("")
    const [day, setDay] = useState("")
    const [remainder, setRemainder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()
    if(task===""){
        alert("please enter task!!")
        return
    }
    addTask({task , day , remainder})
}

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" onChange={(e)=>setTask(e.target.value)} value={task} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time" onChange={(e)=>setDay(e.target.value)} value={day} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Remainder</label>
                <input type="checkbox" onChange={(e)=>setRemainder(e.currentTarget.checked)} value={remainder}/>
            </div>
            <input type="submit" value="save task" className="btn btn-success btn-block"/>
        </form>
    )
}

export default AddTask