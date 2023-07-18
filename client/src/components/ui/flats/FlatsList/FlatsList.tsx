import React, { useEffect } from "react";
import styles from "./FlatsList.module.scss";
import FlatItem from "../FlatItem";
import { useAppDispatch } from "../../../../redux/store";
import { getFlats } from "../../../../redux/flats/asyncActions";
import { useSelector } from "react-redux";
import { flatsSelector } from "../../../../redux/flats/selectors";
import { Status } from "../../../../redux/flats/types";
import { filtersSelector } from "../../../../redux/filters/selectors";

const FlatsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { flats, status, totalCount } = useSelector(flatsSelector);
    const filters = useSelector(filtersSelector);

    useEffect(() => {
        const {
            floor,
            price,
            rooms,
            areaTotal,
            areaKitchen,
            areaLive,
            sort,
            paginate,
        } = filters;

        const floorParam = floor ? `floor=${floor}` : "";
        const priceFromParam = price.from ? `price_gte=${price.from}` : "";
        const priceToParam = price.to ? `price_lte=${price.to}` : "";

        let roomsParam = "";
        for (let i = 0; i < rooms.length; i++) {
            roomsParam += `rooms=${rooms[i]}&`;
        }

        const areaTotalFromParam = areaTotal.from
            ? `area_total_gte=${areaTotal.from}`
            : "";
        const areaTotalToParam = areaTotal.to
            ? `area_total_lte=${areaTotal.to}`
            : "";

        const areaKitchenFromParam = areaKitchen.from
            ? `area_kitchen_gte=${areaKitchen.from}`
            : "";
        const areaKitchenToParam = areaKitchen.to
            ? `area_kitchen_lte=${areaKitchen.to}`
            : "";

        const areaLiveFromParam = areaLive.from
            ? `area_live_gte=${areaLive.from}`
            : "";
        const areaLiveToParam = areaLive.to
            ? `area_live_lte=${areaLive.to}`
            : "";

        const sortParam = sort
            ? `_sort=${sort.value}&_order=${sort.order}`
            : "";

        const paginateParam = paginate
            ? `_page=${paginate.page}&_limit=${paginate.limit}`
            : "";

        dispatch(
            getFlats({
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
            })
        );
    }, [filters]);

    if (status === Status.ERROR) {
        return <h2>Ошибка. Перезагрузите страницу.</h2>;
    }

    if (status === Status.LOADING) {
        return <h2>Загрузка...</h2>;
    }

    return (
        <ul className={styles["flats-list"]}>
            {totalCount ? (
                flats.map((flat) => <FlatItem key={flat.id} {...flat} />)
            ) : (
                <h2>Ничего не найдено.</h2>
            )}
        </ul>
    );
};

export default FlatsList;
