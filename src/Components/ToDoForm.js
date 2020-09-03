import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../Context/GlobalState";

function ToDoForm() {
  const [toDo, setTodo] = useState({ id: "", task: "", isCompleted: false });
  const { addTodo } = useContext(GlobalContext);

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
