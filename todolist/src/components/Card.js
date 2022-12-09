/* This page contains styling for card coomponent */
import React,{useState} from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import the trash and edit icons from the 'react-icons' package
import EditTask from "../popup/EditTask";

const Card = ({ taskObj, index, deleteTask, updateArr }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateArr(obj, index)
        setModal(false)
    }
    const colors = [
        {
            primaryColor : "#f1f7f7"
        },
        {
            primaryColor : "#c7dfe1"
        },
        {
            primaryColor : "#94acae"
        },
        {
            primaryColor : "#e3eff0"
        },
        {
            primaryColor : "#b9d7d9"
        },
    ]

   const handleDelete = () => {
        deleteTask(index)

   }
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        backgroundColor: colors[index%5].primaryColor,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        padding: "16px",
        textAlign: "center",
        margin: "50px",
      }}
    >
      <h2 style={{ marginTop: "0", color: "#333" }}>{taskObj.Name}</h2>
      <p style={{ color: "#666", fontSize: "14px" }}>{taskObj.Description}</p>
      <div
        style={{
          marginTop: "180px",
          display: "flex",
          marginLeft: "300px",
        }}
      >
        <FaTrash
          style={{ color: "#333", marginRight: "15px", cursor: "pointer" }}
          onClick= {handleDelete}
        />
        <FaEdit style={{ color: "#333", cursor: "pointer" }}
        onClick={() => setModal(true)} />
      </div>
      <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
    </div>
  );
};

export default Card;
