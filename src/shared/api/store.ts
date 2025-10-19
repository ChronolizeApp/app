import { lessonSlice } from "@/entities/lesson";
import { userSlice } from "@/entities/user/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [lessonSlice.reducerPath]: lessonSlice.reducer,
        [userSlice.reducerPath]: userSlice.reducer
    },
})
