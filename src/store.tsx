import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BookMarkReducer } from "./features/BookMarkSlice";

export const store = configureStore({
    reducer:{
        bookmarks:BookMarkReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch;