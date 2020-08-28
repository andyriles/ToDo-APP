import React, { useState, useEffect } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import "./style.css";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [toDos, setToDos] = useState([]);
  const addTodo = (toDo) => {
    setToDos([toDo, ...toDos]);
  };

  const toggleCompleted = (id) => {
    setToDos(
      toDos.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  };

  const removeTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };
  //populate toDos upon render
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setToDos(storageTodos);
    }
  }, []);
  //store new data in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="App">
      <h1
        style={{ textAlign: "center", color: "rgb(117, 58, 212)" }}
        variant="h1"
      >
        My To-Do App
      </h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        toDos={toDos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
