import Task from "./Task"
 const Tasks = ({tasks, onDelete ,onToggle }) => {
    
        return (
         <>
           {
               tasks.map((task)=>(
                <Task key={task.id} task={task} ontaskDelete={onDelete} onToggle={onToggle}/>
               ))
           }  
         </>
     )
 }
 
 export default Tasks
 