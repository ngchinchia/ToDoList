import "./App.css";
import { useState } from "react";

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
    }
    setToDoList([...todoList, task]);
  };

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
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteInput(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
