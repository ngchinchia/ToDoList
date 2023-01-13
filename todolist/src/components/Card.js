/* This page contains styling for card coomponent */
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import the trash and edit icons from the 'react-icons' package
import EditTask from "../popup/EditTask";

const Card = ({ taskObj, index, deleteTask, updateArr }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateArr(obj, index);
    setModal(false);
  };

  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        padding: "16px",
        textAlign: "center",
        margin: "50px",
        marginTop: "100px",
        border: "1px solid #808484"
      }}
    >
      <h2 style={{ marginTop: "0", color: "whitesmoke" }}>{taskObj.Name}</h2>
      <p style={{ color: "whitesmoke", fontSize: "14px" }}>
        {taskObj.Description}
      </p>
      <div
        style={{
          marginTop: "180px",
          display: "flex",
          marginLeft: "300px",
        }}
      >
        <FaTrash
          style={{ color: "#7289DA", marginRight: "15px", cursor: "pointer" }}
          onClick={handleDelete}
        />
        <FaEdit
          style={{ color: "#7289DA", cursor: "pointer" }}
          onClick={() => setModal(true)}
        />
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
