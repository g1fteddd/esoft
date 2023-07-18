import { RootState } from "../store";

export const selectedFlatsSelector = (state: RootState) =>
    state.selectedFlats.selectedFlats;
