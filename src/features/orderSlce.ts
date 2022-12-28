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
  orders: [
    {
        orderId:"VE433",
        customer:{
            customerName:"Alex smith",
            customerAvatar:"http://127.0.0.1:5501/assets/images/users/avatar-1.jpg"
        },
        podcastTitle:"Waruziko radio rwanda",
        amount:"34343$",
        stattus:"paid",
    },
    {
        orderId:"VE433",
        customer:{
            customerName:"Alex smith",
            customerAvatar:"http://127.0.0.1:5501/assets/images/users/avatar-1.jpg"
        },
        podcastTitle:"Waruziko radio rwanda",
        amount:"34343$",
        stattus:"paid",
    },
    {
        orderId:"VE433",
        customer:{
            customerName:"Alex smith",
            customerAvatar:"http://127.0.0.1:5501/assets/images/users/avatar-1.jpg"
        },
        podcastTitle:"Waruziko radio rwanda",
        amount:"34343$",
        stattus:"paid",
    },
    {
        orderId:"VE433",
        customer:{
            customerName:"Alex smith",
            customerAvatar:"http://127.0.0.1:5501/assets/images/users/avatar-1.jpg"
        },
        podcastTitle:"Waruziko radio rwanda",
        amount:"34343$",
        stattus:"paid",
    },
    {
        orderId:"VE433",
        customer:{
            customerName:"Alex smith",
            customerAvatar:"http://127.0.0.1:5501/assets/images/users/avatar-1.jpg"
        },
        podcastTitle:"Waruziko radio rwanda",
        amount:"34343$",
        stattus:"paid",
    }

  ]
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    
    },
});
export const {  } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
