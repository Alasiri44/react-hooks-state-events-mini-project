import React from "react";

function Task({text, category, deleteFunction}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text} </div>
      <button onClick={() => deleteFunction(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
