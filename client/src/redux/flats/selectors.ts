import { RootState } from "../store";

export const flatsSelector = (state: RootState) => state.flats;

export const getFlatByIdSelector = (id: number) => (state: RootState) =>
    state.flats.flats.find((obj) => obj.id === id);
