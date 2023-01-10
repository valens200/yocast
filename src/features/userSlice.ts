import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user:{
        FullName:"",
        Email:"",
        Country:"",
        Password:""

    }

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
                    console.log(state.user.Email)
                case 'Country':
                    state.user.Country = value;
                case 'Password':
                    state.user.Password = value;
                default:
                    state.user.Password = state.user.Password;
            }
        }
    }
})

export const userReducer = userSlice.reducer;
export const {initializeUser} = userSlice.actions