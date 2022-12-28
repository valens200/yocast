import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import   {BsFillDice4Fill , BsFillArrowUpSquareFill} from "react-icons/bs"
import {FaPortrait, FaBalanceScaleLeft} from "react-icons/fa"

const initialState = {
  showSidebar:false,
  isDarkMode:true,
  count: 0,
  showSmallNavigation: false,
  analyticsCards: [
    {
      title: "TOTAL EARNINGS",
      percentage: "+16.24 %",
      calue: "$559.24k",
      view: "View net earnings",
      icon: <BsFillDice4Fill />
    },
    {
      title: "ORDERS",
      percentage: " -3.57 %",
      calue: "36,894",
      view: "View all orders",
      icon: <BsFillArrowUpSquareFill />
    },
    {
      title: "CUSTOMERS",
      percentage: " +29.08 %",
      calue: "183.35M",
      view: "See details",
      icon: <FaPortrait />
    },
    {
      title: "MY BALANCE",
      percentage: "+0.00 %",
      calue: "$165.89k",
      view: "Withdraw money",
      icon: <FaBalanceScaleLeft />
    }
  ]

};
const pageSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setIsDarkMode: (state, action : PayloadAction<String>) => {
      if(action.payload === "dark"){
        state.isDarkMode = true;
      }else if(action.payload === "white"){
        state.isDarkMode = false;
      }else{
        state.isDarkMode = state.isDarkMode;
      }
    },

    setShowSidebar: (state, action : PayloadAction<String>) => {
      if(action.payload === "show"){
        state.showSidebar = true;
      }else if(action.payload === "hide"){
        state.showSidebar = false;
      }else{
        state.showSidebar = state.showSidebar;
      }
    }
  }
});

export const {setShowSidebar,setIsDarkMode} = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
