import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import   {BsFillDice4Fill , BsBag, BsFillArrowUpSquareFill} from "react-icons/bs"
import {FaPortrait, FaBalanceScaleLeft} from "react-icons/fa"
import {BiDollarCircle, BiUserCircle, BiWallet} from "react-icons/bi"

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
      backgroundColor:"bg-[#0AB39C2E]",
      view: "View net earnings",
      icon: <BiDollarCircle />
    },
    {
      title: "ORDERS",
      percentage: " -3.57 %",
      calue: "36,894",
      backgroundColor:"bg-[#299CDB2E]",
      view: "View all orders",
      icon: <BsBag />
    },
    {
      title: "CUSTOMERS",
      percentage: " +29.08 %",
      calue: "183.35M",
      backgroundColor:"bg-[#F7B84B2E]",
      view: "See details",
      icon: <BiUserCircle />
    },
    {
      title: "MY BALANCE",
      percentage: "+0.00 %",
      calue: "$165.89k",
      backgroundColor:"bg-[#4051892E]",
      view: "Withdraw money",
      icon: <BiWallet />
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
