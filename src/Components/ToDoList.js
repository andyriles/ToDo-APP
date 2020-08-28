import React from "react";
import ToDo from "./ToDo";
import { List } from "@material-ui/core";

function ToDoList({ toDos, toggleCompleted, removeTodo }) {
  return (
    <List>
      {toDos.map((item) => (
        <ToDo
          key={item.id}
          toDo={item}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default ToDoList;
