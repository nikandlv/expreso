import { createSlice } from "@reduxjs/toolkit";

const ApplicationSlice = createSlice({
  name: "Application",
  initialState: { count: 0 },
  reducers: {
    increment: state => ({ ...state, count: state.count + 1 }),
    decrement: state => ({ ...state, count: state.count }),
    decrement_ERROR: state => ({ ...state, count: state.count + 1 }),
    decrement_SUCCESS: (state, action) => ({
      ...state,
      count: state.count - action.payload
    })
  }
});

export default ApplicationSlice;
