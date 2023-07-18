import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import flatsReducer from "./flats/slice";
import filtersReducer from "./filters/slice";
import selectedFlatsReducer from "./selectedFlats/slice";

export const store = configureStore({
    reducer: {
        flats: flatsReducer,
        filters: filtersReducer,
        selectedFlats: selectedFlatsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
