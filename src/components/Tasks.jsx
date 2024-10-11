import { ChevronRight, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
function Tasks(props){
    const navigate = useNavigate();
    function onsidDetailsClick(task){
        navigate(`/TaskDetails?title=${task.title}&description=${task.description}`)
    }
    return(
        <ul className='space-y-4 w-[500px] bg-white p-5 rounded-md'>
        {props.tasks.map((task)=>(
        <li key={task.id} className='flex gap-3'>
            <button 
            onClick={()=>props.onTaskClick(task.id)}
            className={`bg-gray-400 rounded-md w-full ${task.isCompleted && 'line-through bg-green-600 text-white'}`}>{task.title}
            </button>
            <p>
            {task.isCompleted && <p className='text-sm'>Tarefa Concluída</p>}
            </p>
            <button 
            className='bg-gray-400 rounded-md'
            onClick={()=>onsidDetailsClick(task)}
            ><ChevronRight/></button>
            <button onClick={()=>props.onDeletetaskclick(task.id)} className=' bg-gray-400 rounded-md'><Trash2 /></button>
        </li>
        ))}
        </ul>
    )
}
export default Tasks;