import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type user = {
        type:String,
        names: String,
        email: String,
        country: String,
        password: String
}
const initialState = {
    user:{
        FullName:"",
        Email:"",
        Country:"",
        Password:""
    },
    loggedInUser:{
        type:"",
        names: "",
        email: "",
        country: "",
        password: ""
    }as user,
}
const userSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
        initializeUser:(state, action: PayloadAction<{key:String, value:String}>) => {
            const key = action.payload.key;
            const value = action.payload.value.toString();
            switch(key){
                case 'FullName':
                    state.user.FullName = value;
                case 'Email':
                    state.user.Email = value;
                case 'Country':
                    state.user.Country = value;
                case 'Password':
                    state.user.Password = value;
                default:
                    state.user.Password = state.user.Password;
            }
        },
        initializeLoggedInUser : (state, action: PayloadAction<user>) => {
            state.loggedInUser = action.payload
            
        }
    }
})

export const userReducer = userSlice.reducer;
export const {initializeUser, initializeLoggedInUser} = userSlice.actions