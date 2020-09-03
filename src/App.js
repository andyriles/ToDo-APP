import React from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import "./style.css";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1
          style={{ textAlign: "center", color: "rgb(117, 58, 212)" }}
          variant="h1"
        >
          My To-Do App
        </h1>
        <ToDoForm />
        <ToDoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
