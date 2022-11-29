import { Category } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BiCategory } from "react-icons/bi";
import { json } from "react-router-dom";
import { bookMark } from "../types/appTypes";
import { category } from "../types/appTypes";
import { stateTemplate } from "../types/appTypes";

const initialState = {
  count:0,
  showSmallNavigation:false,
   
};
const pageSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
     setShowNavigation : (state, action : PayloadAction<boolean>) => {
        if(action.payload == true){
            state.showSmallNavigation = true;
        }else{
            state.showSmallNavigation = false;
        }

     },
     
  }
});

export const { setShowNavigation} = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
