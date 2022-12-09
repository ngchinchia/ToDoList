import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import the trash and edit icons from the 'react-icons' package

const Card = ({ taskObj, index }) => {
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        backgroundColor: "white",
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
        />
        <FaEdit style={{ color: "#333", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Card;
