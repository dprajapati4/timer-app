import { combineReducers } from "@reduxjs/toolkit";
import { ADD_TASK } from "./actions";

const taskrReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: taskrReducer,
});

export default rootReducer;
