export type TRooms = "1" | "2" | "3";

export interface ISort {
    value: string;
    order: string;
}

export interface IPaginate {
    page: number;
    limit: number;
}

export interface IFilters {
    floor: string;
    price: {
        from: string;
        to: string;
    };
    rooms: TRooms[];
    areaTotal: {
        from: string;
        to: string;
    };
    areaKitchen: {
        from: string;
        to: string;
    };
    areaLive: {
        from: string;
        to: string;
    };
    sort: ISort;
    paginate: IPaginate;
}
