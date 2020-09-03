const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [action.payload, ...state.toDos],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        toDos: state.toDos.map((item) => {
          if (item.id === action.payload) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        }),
      };

    case "REMOVE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;
