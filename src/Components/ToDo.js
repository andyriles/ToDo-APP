import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function ToDo({ toDo }) {
  const { toggleCompleted, removeTodo } = useContext(GlobalContext);
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
          checked={toDo.isCompleted ? toDo.isCompleted : false}
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
