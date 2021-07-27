import {FaTimes} from 'react-icons/fa'
const Task = ({task, ontaskDelete, onToggle }) => {
    return (
        <div className={`task ${task.remunder ? 'reminder' : ''} `} onDoubleClick={
            ()=> onToggle(task.id)
        }>
            <h3>{task.text} <FaTimes onClick={()=> ontaskDelete(task.id)} style={{color:'red',cursor:'pointer'}}  /></h3>
            
        </div>
    )
}

export default Task
