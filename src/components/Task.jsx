import React, { useContext, useReducer } from "react";

// Actions
const CREATE_TASK = "CREATE_TASK";
const ERASE_TASK = "ERASE_TASK";
const FILTER_TASK = "FILTER_TASK";

// const myContext = React.createContext(null);

// Initial State

const initialState = {
  id: "",
  title: "",
  description: "",
};

// Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        [action.title]: action.payload,
      };
    case ERASE_TASK:
      return {
        ...state,
      };
    case FILTER_TASK:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
const Task = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { title, description } = state;

const addTask =() =>{
    dispatch({type:CREATE_TASK})
}
const removeTask =() =>{
    dispatch({type:ERASE_TASK})
}
const filterTask =() =>{
    dispatch({type:FILTER_TASK})
}
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
         defaultValue = {title}
      />
      <input
        type="text"
        placeholder="description"
        defaultValue = {description}
      />
      <div>
        <button onClick={addTask}>add</button>
        <button onClick={removeTask}>erase </button>
        <button onClick={filterTask}>filter</button>
      </div>
    </div>
  );
};

export default Task;
