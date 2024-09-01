import React, {useState} from 'react';
function Task(){
    const [Tasks,setTasks]=useState([
        {id:1,name:'Task 1'},
        {id:2,name:'Task 2'},
        {id:3,name:'Task 3'},
    ]);
    const handleDelete = (id) => {
        setTasks(Tasks.filter(task => task.id!==id));
    }
    return(
        <div >
            <h1 >Tasks List</h1>
            <ul >
                {Tasks.map(task => (
                    <li key={task.id}>
                        {task.name}    
                        &nbsp;
                        <button onClick={()=>handleDelete(task.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Task;