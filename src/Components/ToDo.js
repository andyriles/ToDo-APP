import React from "react";

function ToDo({ toDo, toggleCompleted, removeTodo }) {
  const completedStyle = {
    font: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-list">
      <div className="todo-item">
        <input
          type="checkbox"
          checked={toDo.isCompleted}
          onChange={() => toggleCompleted(toDo.id)}
        />
        <p style={toDo.isCompleted ? completedStyle : null}>{toDo.task}</p>
        <button onClick={() => removeTodo(toDo.id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDo;
