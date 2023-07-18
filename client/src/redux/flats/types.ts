export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export interface IFlat {
    id: number;
    floor: number;
    pos_on_floor: number;
    price: number;
    rooms: number;
    area_total: number;
    area_kitchen: number;
    area_live: number;
    layout_image: string;
}

export interface IResponseData {
    flats: IFlat[];
    totalCount: number;
}

export interface IFlatState {
    flats: IFlat[];
    status: Status;
    totalCount: number;
}
