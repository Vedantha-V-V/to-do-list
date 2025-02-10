import React,{useState} from 'react';

function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }   
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }


    return(<><div className="to-do-list">
        <h1>Task Board</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="addbutton" onClick={addTask}>Add</button>
        </div>
        <ol id="todo-list">
            {tasks.map((task, index)=><li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move" onClick={()=>moveTaskUp(index)}>Move Up</button>
                <button className="move" onClick={()=>moveTaskDown(index)}>Move Down</button>
            </li>)}
        </ol>
        <button className="download-button">Download</button>
        </div></>);
}
export default ToDoList;