import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}
const userSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{

    }
})

export const userReducer = userSlice.reducer;
export const {} = userSlice.actions