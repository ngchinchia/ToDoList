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
    let emptyKeys = [];

  Object.keys(taskObj).forEach((key) => {
    // Check if the key's value is empty
    if (Array.isArray(taskObj[key]) && taskObj[key].length === 0) {
      // If the value is an empty array, add the key to the emptyKeys array
      emptyKeys.push(key);
    } else if (typeof taskObj[key] === 'string' && taskObj[key].trim().length === 0) {
      // If the value is an empty string, add the key to the emptyKeys array
      emptyKeys.push(key);
    } else if (typeof taskObj[key] === 'object' && Object.keys(taskObj[key]).length === 0) {
      // If the value is an empty object, add the key to the emptyKeys array
      emptyKeys.push(key);
    }
  });

  // If the emptyKeys array is not empty, it means that one or more keys have empty values
  if (emptyKeys.length > 0) {
    // Display an alert message for each empty key
    emptyKeys.forEach((key) => {
      window.alert(`The ${key} field is empty, please fill in the blanks.`);
    });
  } else {
    // If none of the keys have empty values, save the task in the local storage and update the taskList state variable
    let temp = [...taskList];
    temp.push(taskObj);
    localStorage.setItem('TaskInfo', JSON.stringify(temp));
    setTaskList(temp);
    setModal(false);
  }
   
  };
  return (
    <>
      <div className="header text-center">
        <h1><b>Todo List</b></h1>
        <button className="btn btn-primary mt-4 btn-lg" onClick={() => setModal(true)}>
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
