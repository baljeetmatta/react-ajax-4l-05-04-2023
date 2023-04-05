import React, { ChangeEvent, useState } from 'react';
type TodoType={
    title:string;
    status:string;
}
const TodoApp=()=>
{

    const [title,setTitle]=useState("");
    const [tasks,setTask]=useState<TodoType[]>([]);
const titleHandler=(event:ChangeEvent)=>{
    setTitle((event.target as HTMLInputElement).value);

}
const addButton=()=>{
   // alert(title);
 let newTask:TodoType={
    title:title,
    status:'pending'
 }
 let mytask=[...tasks];

 mytask.push(newTask);

//tasks.push(newTask);
setTask(mytask);
setTitle("");


}
return(
    <>
    <input type="text" value={title} onChange={titleHandler}/>
    <button onClick={addButton}>Add</button>
    <h2>My Tasks</h2>
    <ul>
        {
            tasks.map((task)=>(
            <li>{task.title}</li>
            ))
        }
    </ul>
    </>
)

}
export default TodoApp;