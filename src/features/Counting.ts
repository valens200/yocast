import { Category } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BiCategory } from "react-icons/bi";
import { json } from "react-router-dom";
import { bookMark } from "../types/appTypes";
import { category } from "../types/appTypes";
import { stateTemplate } from "../types/appTypes";

const initialState = {
  count:0
   
};
const CountingSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    incrementCount: (state, action : PayloadAction<{length : number}>) => {
        state.count = state.count == action.payload.length - 1 ? 0 : state.count + 1;
    },
    decrementCount: (state, action : PayloadAction<{length: number}>) => {
        state.count = state.count == 0 ? action.payload.length - 1 : state.count - 1;
    } 
  },
});

export const {incrementCount,decrementCount } = CountingSlice.actions;
export const CountingReducer = CountingSlice.reducer;
