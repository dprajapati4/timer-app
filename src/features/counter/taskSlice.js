import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addedTask: (state, action) => {
      const { taskName, time } = action.payload;
      console.log("action.payload", action.payload);
      state.push({
        taskName,
        time,
      });
    },
  },
});

export const { addedTask } = taskSlice.actions;
export default taskSlice.reducer;
