import React, {useState} from "react";
import CreateTask from "../popup/CreateTask";


function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) => {
        let temp = [...taskList]
        temp.push(taskObj)
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
        {taskList.map((o) => <li>{o.Name}</li>)}
        {taskList.map((o) => <li>{o.Description}</li>)}
      </div>
      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
    </>
  );
}

export default TodoList;
