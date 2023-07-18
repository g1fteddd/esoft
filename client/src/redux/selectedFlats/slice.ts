import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISelectedFlats } from "./types";

const initialState: ISelectedFlats = {
    selectedFlats: [],
};

const selectedFlatsSlice = createSlice({
    name: "selectedFlats",
    initialState,
    reducers: {
        toggleSelectedFlats: (state, action: PayloadAction<number>) => {
            if (state.selectedFlats.includes(action.payload)) {
                state.selectedFlats = state.selectedFlats.filter(
                    (id) => id !== action.payload
                );
            } else {
                state.selectedFlats.push(action.payload);
            }
        },
    },
});

export const { toggleSelectedFlats } = selectedFlatsSlice.actions;

export default selectedFlatsSlice.reducer;
