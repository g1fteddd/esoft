import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilters, IPaginate, ISort, TRooms } from "./types";

const initialState: IFilters = {
    floor: "",
    price: {
        from: "",
        to: "",
    },
    rooms: [],
    areaTotal: {
        from: "",
        to: "",
    },
    areaKitchen: {
        from: "",
        to: "",
    },
    areaLive: {
        from: "",
        to: "",
    },
    sort: {
        value: "price",
        order: "desc",
    },
    paginate: {
        page: 1,
        limit: 8,
    },
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFloor: (state, action: PayloadAction<string>) => {
            state.floor = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setPriceFrom: (state, action: PayloadAction<string>) => {
            state.price.from = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setPriceTo: (state, action: PayloadAction<string>) => {
            state.price.to = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        toggleRooms: (state, action: PayloadAction<TRooms>) => {
            if (state.rooms.includes(action.payload)) {
                state.rooms = state.rooms.filter(
                    (item) => item !== action.payload
                );
            } else {
                state.rooms.push(action.payload);
            }
            state.paginate = initialState.paginate;
        },
        setAreaTotalFrom: (state, action: PayloadAction<string>) => {
            state.areaTotal.from = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setAreaTotalTo: (state, action: PayloadAction<string>) => {
            state.areaTotal.to = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setAreaKitchenFrom: (state, action: PayloadAction<string>) => {
            state.areaKitchen.from = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setAreaKitchenTo: (state, action: PayloadAction<string>) => {
            state.areaKitchen.to = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setAreaLiveFrom: (state, action: PayloadAction<string>) => {
            state.areaLive.from = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setAreaLiveTo: (state, action: PayloadAction<string>) => {
            state.areaLive.to = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setSort: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload;
        },
        setPaginate: (state, action: PayloadAction<IPaginate>) => {
            state.paginate = action.payload;
        },
    },
});

export const {
    setFloor,
    setPriceFrom,
    setPriceTo,
    toggleRooms,
    setAreaTotalFrom,
    setAreaTotalTo,
    setAreaKitchenFrom,
    setAreaKitchenTo,
    setAreaLiveFrom,
    setAreaLiveTo,
    setSort,
    setPaginate,
} = filtersSlice.actions;

export default filtersSlice.reducer;
