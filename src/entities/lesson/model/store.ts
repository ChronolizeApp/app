import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILesson, ILessonReducer } from "./types";
import { lessonItems } from "./mock";

const initialState: ILessonReducer = {
    lesson: lessonItems[0],
    lessons: lessonItems,
    isLoading: false,
    error: "",
}

export const lessonSlice = createSlice({
    name: "lesson",
    initialState,
    reducers: {
        setLesson(state, action: PayloadAction<number>) {
            state.lesson = state.lessons[action.payload];
        },
        getLessons(state, action: PayloadAction<ILesson[]>) {
            state.lessons = action.payload
        }
    },
})

export const { setLesson, getLessons } = lessonSlice.actions

export default lessonSlice.reducer
