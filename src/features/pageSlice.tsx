import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BsFillDice4Fill, BsBag, BsFillArrowUpSquareFill } from "react-icons/bs"
import { FaPortrait, FaBalanceScaleLeft } from "react-icons/fa"
import { BiDollarCircle, BiUserCircle, BiWallet } from "react-icons/bi"

const initialState = {
  isLoading:false,
  message:"",
  showAlerts:false,
  podcastPostedSucessfully:false,
  showBackDrop:false,
  showSidebar: false,
  isDarkMode: true,
  next:false,
  count: 0,
  showSmallNavigation: false,
  analyticsCards: [
    {
      title: "TOTAL EARNINGS",
      percentage: "+16.24 %",
      value: 0,
      count: 559.25,
      backgroundColor: "bg-[#0AB39C2E]",
      view: "View net earnings",
      icon: <BiDollarCircle />
    },
    {
      title: "SUBSCRIPTIONS",
      percentage: " -3.57 %",
      value: 0,
      count: 169,
      backgroundColor: "bg-[#299CDB2E]",
      view: "View all orders",
      icon: <BsBag />
    },
    {
      title: "CUSTOMERS",
      percentage: " +29.08 %",
      value: 0,
      count: 183.35,
      backgroundColor: "bg-[#F7B84B2E]",
      view: "See details",
      icon: <BiUserCircle />
    },
    {
      title: "MY BALANCE",
      percentage: "+0.00 %",
      value: 0,
      count: 165.89,
      backgroundColor: "bg-[#4051892E]",
      view: "Withdraw money",
      icon: <BiWallet />
    }
  ]

};
const pageSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<String>) => {
      if (action.payload === "dark") {
        state.isDarkMode = true;
      } else if (action.payload === "white") {
        state.isDarkMode = false;
      } else {
        state.isDarkMode = state.isDarkMode;
      }
    },

    setShowSidebar: (state, action: PayloadAction<String>) => {
      if (action.payload === "show") {
        state.showSidebar = true;
      } else if (action.payload === "hide") {
        state.showSidebar = false;
      } else {
        state.showSidebar = state.showSidebar;
      }
    },
    setPodcastPostedSucessfully: (state, action : PayloadAction<boolean>) => {
      const sucess = action.payload;
      if(sucess){
        state.podcastPostedSucessfully = true;
      }else{
        state.podcastPostedSucessfully = false;
      }
    },
    setShowBackDrop: (state, action: PayloadAction<String>) => {
      const whatToDO = action.payload;
      if(whatToDO == 'show'){
        state.showBackDrop = true;
      }else{
        state.showBackDrop = false;
      }
    },
    setShowAlerts: (state, action: PayloadAction<boolean>) => {
      const show = action.payload;
      if(show == true){
        state.showAlerts = true;
      }else{
        state.showAlerts = false;
      }

    },
    initialCardValues: (state, action: PayloadAction<null>) => {
      const analyticsCards = state.analyticsCards;
      analyticsCards.forEach((card) => (
      card.value = card.value < card.count ?  card.value + 1 : card.value
      ))
      state.analyticsCards = analyticsCards;
    },
    setNext: (state, action: PayloadAction<boolean>) => {
      if(action.payload == true){
        state.next = true;
      }else if(action.payload == false){
        state.next = false;
      }else{
        state.next = state.next;
      }
    },
    setMessage: (state, action : PayloadAction<{message:String}>) => {
      state.message = action.payload.message.toString();
    },
    setLoading: (state, action : PayloadAction<boolean>) => {
      const load = action.payload;
      if(load){
        state.isLoading = true;
      }else {
        state.isLoading = false;
      }

    }
  }
});

export const { setShowSidebar,setLoading, setShowAlerts,  setMessage, setPodcastPostedSucessfully, setShowBackDrop ,setIsDarkMode, initialCardValues,setNext } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
