import { useState } from "react";

function Addtasks(props){
    const[title,setTitle]=useState('');
    const[descrption,setDescription]=useState('');
    return(
        <div className=" bg-white space-y-4 rounded-md shadow-md p-6 flex flex-col">
            <input 
            className=" border border-slate-300 outline-slate-400 rounded-md " 
            type="text" 
            placeholder="Digite o Título da tarefa" 
            value={title}
            onChange={(event)=>setTitle(event.target.value)}></input>
            <input 
            className="border border-slate-300 outline-slate-400 rounded-md" 
            type="text" placeholder="Digite a descrição da tarefa" 
            value={descrption} 
            onChange={(event)=>
            setDescription(event.target.value)} ></input>
            <button 
            onClick={()=> {
                if(!title.trim() || !descrption.trim()){
                    return alert("Preencha título e a descrição da tarefa")
                }
                props.onAddTaskSubmit(title,descrption)} }
            className=" bg-[#7b7894] w-40 p-2 shadow-md rounded-md m-auto text-white">Adicionar</button>
        </div>
    )
}
export default Addtasks;