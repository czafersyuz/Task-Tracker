
import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  //delete task
  const deleteTask =(deleteTaskId)=>{
    // console.log("delete task", deleteTaskId);
    setTasks(tasks.filter((tasks)=>tasks.id !== deleteTaskId))
  }
 

  return (
    <div className="container">
      <Header title="TASK TRACKER"/>
      <AddTask />
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default App;
