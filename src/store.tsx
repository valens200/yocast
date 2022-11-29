import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BookMarkReducer } from "./features/BookMarkSlice";
import { UserReducer } from "./features/UserSlice";
import { CountingReducer } from "./features/Counting";
import { pageReducer } from "./features/pageSlice";

export const store = configureStore({
    reducer: {
        bookmarks: BookMarkReducer,
        user: UserReducer,
        count:CountingReducer,
        page:pageReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;