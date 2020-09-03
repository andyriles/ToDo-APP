import React, { useContext } from "react";
import ToDo from "./ToDo";
import { List } from "@material-ui/core";

import { GlobalContext } from "../Context/GlobalState";

function ToDoList() {
  const { toDos } = useContext(GlobalContext);
  return (
    <List>
      {toDos.map((item) => (
        <ToDo
          key={item.id}
          toDo={item}
        />
      ))}
    </List>
  );
}

export default ToDoList;
