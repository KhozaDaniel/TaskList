import {useState} from 'react'
import { FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa';


export default function To_Do_List() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputEvents(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  } 

  function deleteTask(index){
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] =
      [updateTask[index - 1], updateTask[index]];
      setTasks(updateTask);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] =
      [updateTask[index + 1], updateTask[index]];
      setTasks(updateTask);
    }
  }


  return (
    <div className='to-do-list'>
      <h1>Just do it.</h1>

      <div>

        <input type="text" 
        placeholder='Enter New Task...'
        value={newTask}
        onChange={handleInputEvents}/>

        <button 
          className='add-btn'
          onClick={addTask}>
          Add Task
        </button>

      </div>

      <ol className="task-list">
        {tasks.map((task, index) =>
        <li key={index}>
          <span className='text'>{task}</span>

          <button
          className='delete-btn'
          onClick={() => deleteTask(index)}>
           <FaTrash /> 
          </button>

          <button className='move-btn'
          onClick={() => moveTaskUp(index)}>
            <FaArrowUp />
          </button>

          <button className='move-btn'
          onClick={() => moveTaskDown(index)}>
            <FaArrowDown />
          </button>

        </li>
      )}
      </ol>


    </div>
  )
}
