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
            primaryColor : "#5D93E1",
            secondaryColor : "ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "F3F0FD"
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
        margin: "100px",
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
