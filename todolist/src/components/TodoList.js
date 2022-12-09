import React, {useEffect, useState} from "react";
import CreateTask from "../popup/CreateTask";
import Card from "./Card";


function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        let arr = localStorage.getItem("TaskInfo")
        
        if(arr){
            let obj = JSON.parse(arr) //convert arr string to object
            setTaskList(obj)
        }
    },[])

    /* Pushes the task user creates */
    const saveTask = (taskObj) => {
        let temp = [...taskList]
        temp.push(taskObj)
        localStorage.setItem("TaskInfo", JSON.stringify(temp)) //Stores data in local storage
        setTaskList(temp)
        setModal(false)

    }
  return (
    <>
      <div className="header text-center">
        <h2>Todo List</h2>
        <button className="btn btn-primary mt-4" onClick = {() => setModal(true)}>Create Task</button>
      </div>
      <div className="task-container">
        {taskList.map((o, index) => <Card taskObj = {o} index = {index} /> )}
       
      </div>
      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
    </>
  );
}

export default TodoList;
