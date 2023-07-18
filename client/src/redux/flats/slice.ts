import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFlat, IFlatState, IResponseData, Status } from "./types";
import { getFlats } from "./asyncActions";

const initialState: IFlatState = {
    flats: [],
    status: Status.LOADING,
    totalCount: 0,
};

const flatsSlice = createSlice({
    name: "flats",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getFlats.fulfilled,
            (state, action: PayloadAction<IResponseData>) => {
                state.flats = action.payload.flats;
                state.totalCount = action.payload.totalCount;
                state.status = Status.SUCCESS;
            }
        );

        builder.addCase(getFlats.pending, (state) => {
            state.flats = [];
            state.status = Status.LOADING;
        });
        builder.addCase(getFlats.rejected, (state) => {
            state.flats = [];
            state.status = Status.ERROR;
        });
    },
});

export default flatsSlice.reducer;
