import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { pageReducer } from "./features/pageSlice";
import { recentActivityReducer } from "./features/recentActivitySlice";
import { podcastReducer } from "./features/podCastSlice";
import { customerReducer } from "./features/customerSlice";
import { orderReducer } from "./features/orderSlce";
import { clientsReducer } from "./features/clientsSlice";
import { authenticationReducer } from "./features/authenticationSlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
    reducer: {
        page:pageReducer,
        recentActivities:recentActivityReducer,
        podcasts:podcastReducer,
        customers:customerReducer,
        orders:orderReducer,
        subscriptions:clientsReducer,
        authentication:authenticationReducer,
        user:userReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;