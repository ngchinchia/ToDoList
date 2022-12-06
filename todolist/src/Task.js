import React from "react";

export const Task = (props) => {
  return (
    <div>
      <h1>{props.taskName}</h1>
      <button>Complete</button>
      <button onClick={() => props.deleteInput(props.id)}>Delete</button>
    </div>
  );
};
