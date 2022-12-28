import { Category } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BiCategory } from "react-icons/bi";
import { json } from "react-router-dom";
import { bookMark } from "../types/appTypes";
import { category } from "../types/appTypes";
import { stateTemplate } from "../types/appTypes";
import   {BsFillDice4Fill , BsFillArrowUpSquareFill} from "react-icons/bs"
import {FaPortrait, FaBalanceScaleLeft} from "react-icons/fa"

const initialState = {
  
};
const customerSlice = createSlice({
  name: "cutomers",
  initialState,
  reducers: {

  }
});
export const {  } = customerSlice.actions;
export const customerReducer = customerSlice.reducer;
