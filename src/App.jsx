// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import AddTask from './components/Addtask';
import { useState } from "react"

function App() {
  const[showAddTask, SetshowAddTask]= useState(false)
  const [tasks, setTasks]= useState( [
    {
    id:1,
    text:"go buy some fruits",
    day:'Feb 6th at 2:30pm',
    reminder:true
},
{
    id:2,
    text:"Make a cup of tea for me",
    reminder:false
},
{
    id:3,
    text:"Have to complete the react js",
    day:'Feb 8th at 10:00pm',
    reminder:true
}
])
const Addtask=(task)=>
{ 

const id=Math.floor(Math.random()*10000)+1


const newtask={ id , ...task}
setTasks([...tasks,newtask])

} 

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
const toggleReminder=(id)=>{
  setTasks(tasks.map((task) => task.id === id ? {...task,remunder:!task.remunder} : task ))
}

return (
    <div className="container">
      <Header onAdd={()=>SetshowAddTask(!showAddTask)} ShowAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={Addtask}/>}
      {tasks.length !==0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "There is no tasks left"}
    </div>
  );
}

export default App;