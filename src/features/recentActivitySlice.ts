import { createSlice } from "@reduxjs/toolkit";
import { activityType } from "../types/appTypes";

 type recentACtivityInitialStateType = {
    activities : activityType[]

}
const  initialState : recentACtivityInitialStateType = {
    activities : [
        {
            title:"Purchase by James Price",
            titleImage:"",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"http://127.0.0.1:5501/assets/images/products/img-10.png",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"http://127.0.0.1:5501/assets/images/users/avatar-2.jpg",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[ "http://127.0.0.1:5501/assets/images/products/img-8.png", "http://127.0.0.1:5501/assets/images/products/img-2.png", "http://127.0.0.1:5501/assets/images/products/img-10.png"],
        },
        {
            title:"Purchase by James Price",
            titleImage:"",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        },
        {
            title:"Purchase by James Price",
            titleImage:"http://127.0.0.1:5501/assets/images/users/avatar-3.jpg",
            description:"Product noise evolve smartwatch",
            time:"02:14 PM Today",
            descriptionImage:[""],
        }
    ]

}

const recententActivitySlice = createSlice({
    name:"activity",
    initialState,
    reducers:{}
})

export const {} = recententActivitySlice.actions;
export const recentActivityReducer = recententActivitySlice.reducer;