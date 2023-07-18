import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IGetFlats {
    floorParam: string;
    priceFromParam: string;
    priceToParam: string;
    roomsParam: string;
    areaTotalFromParam: string;
    areaTotalToParam: string;
    areaKitchenFromParam: string;
    areaKitchenToParam: string;
    areaLiveFromParam: string;
    areaLiveToParam: string;
    sortParam: string;
    paginateParam: string;
}

export const getFlats = createAsyncThunk(
    "flats/getFlats",
    async (params: IGetFlats) => {
        const {
            floorParam,
            priceFromParam,
            priceToParam,
            roomsParam,
            areaTotalFromParam,
            areaTotalToParam,
            areaKitchenFromParam,
            areaKitchenToParam,
            areaLiveFromParam,
            areaLiveToParam,
            sortParam,
            paginateParam,
        } = params;

        const res = await axios.get(
            `http://localhost:5000/flats?${floorParam}&${priceFromParam}&${priceToParam}&${roomsParam}&${areaTotalFromParam}&${areaTotalToParam}&${areaKitchenFromParam}&${areaKitchenToParam}&${areaLiveFromParam}&${areaLiveToParam}&${sortParam}&${paginateParam}`
        );
        return { ...res.data };
    }
);
