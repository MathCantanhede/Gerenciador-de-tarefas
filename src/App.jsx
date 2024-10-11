import './App.css'
import Tasks from './components/Tasks'
import Addtasks from './components/Addtasks'
import { useEffect, useState } from 'react'

function App() {
  const[tasks,setTasks]=useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  function onTaskClick(taskId){
    const newTask = tasks.map((task)=>{
      if(task.id === taskId){
        return{...task,isCompleted: !task.isCompleted}
      } return task
    })
    setTasks(newTask)
  }
  function onDeletetaskclick(taskId){
    const newtaskDelete = tasks.filter(task=> task.id != taskId)
    setTasks(newtaskDelete)
  }
  function onAddTaskSubmit(title,description){
    const newTaskadd ={
      id:tasks.length + 1,
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks,newTaskadd])
  }
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  return (
    <div className='h-screen w-screen bg-gray-500 flex justify-center p-6 '>
      <div className='w-[500px] space-y-2 mt-5'>
        <h1 className='text-center font-bold text-white'>Gerenciador de tarefas</h1>
        <Addtasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeletetaskclick={onDeletetaskclick} />
        
      </div>
    </div>
  )
}

export default App
