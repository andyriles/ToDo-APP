import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
//import Persistence from "./Persistence";

const initialState = {
  toDos: localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //store new data in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.toDos));
  }, [state]);

  const addTodo = (toDo) => {
    dispatch({
      type: "ADD_TODO",
      payload: toDo,
    });
  };

  const toggleCompleted = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id,
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        toDos: state.toDos,
        addTodo,
        toggleCompleted,
        removeTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
