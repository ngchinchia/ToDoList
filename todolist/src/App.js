import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newInput, setNewInput] = useState("");

  /* Sets empty string variable to user input value */
  const handleInputChange = (e) => {
    setNewInput(e.target.value);
  };

  /* Stores user input value input an array */
  const addInput = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newInput,
    };
    setToDoList([...todoList, task]);
  };

  /* Deletes input based on id */
  const deleteInput = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} />
        <button onClick={addInput}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteInput={deleteInput}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
