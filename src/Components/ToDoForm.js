import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ToDoForm({ addTodo }) {
  const [toDo, setTodo] = useState({ id: "", task: "", isCompleted: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo.task.trim()) {
      addTodo({ ...toDo, id: uuid() });
      //reset input
      setTodo({ ...toDo, task: "" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formInput">
      <input
        type="text"
        name="task"
        placeholder="Add todo"
        value={toDo.task}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  );
}

export default ToDoForm;
