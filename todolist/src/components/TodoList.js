/* This page displays the UI for ToDoList */
import React, { useEffect, useState } from "react";
import CreateTask from "../popup/CreateTask";
import Card from "./Card";

function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  /* Stores the data in localstorage to prevent data disappearance on refresh */
  useEffect(() => {
    let arr = localStorage.getItem("TaskInfo");

    if (arr) {
      let obj = JSON.parse(arr); //convert arr string to object
      setTaskList(obj);
    }
  }, []);

  /* Delete functionality */
  const deleteTask = (index) => {
    let temp = [...taskList];
    temp.splice(index, 1);
    localStorage.setItem("TaskInfo", JSON.stringify(temp));
    setTaskList(temp);
  };

  const updateArr = (obj, index) => {
    let temp = [...taskList];
    temp[index] = obj;
    localStorage.setItem("TaskInfo", JSON.stringify(temp));
    setTaskList(temp);
  };

  /* Adds the task user creates */
  const saveTask = (taskObj) => {
    let temp = [...taskList];
    temp.push(taskObj);
    localStorage.setItem("TaskInfo", JSON.stringify(temp)); //Stores data in local storage
    setTaskList(temp);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <h1><b>Todo List</b></h1>
        <button className="btn btn-primary mt-4" onClick={() => setModal(true)}>
          Create Task
        </button>
        <h2 className="task-header"><b>All Task</b></h2>
      </div>
      <div className="task-container">
        
        {taskList.map((o, index) => (
          <Card
            taskObj={o}
            index={index}
            deleteTask={deleteTask}
            updateArr={updateArr}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} />
    </>
  );
}

export default TodoList;
