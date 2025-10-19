import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./mock";
import { ISettings } from "./types";

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        setSettings(state, action: PayloadAction<ISettings>) {
            state.settings = action.payload
        }
    }
})

export const { setName, setSettings } = userSlice.actions
export default userSlice.reducer
