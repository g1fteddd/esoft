import React from "react";
import styles from "./FlatItem.module.scss";
import { IFlat } from "../../../../redux/flats/types";
import { useNavigate } from "react-router-dom";

interface IFlatItemProps extends IFlat {}

const FlatItem: React.FC<IFlatItemProps> = ({
    id,
    floor,
    pos_on_floor,
    price,
    rooms,
    area_total,
    area_kitchen,
    area_live,
    layout_image,
}) => {
    const navigate = useNavigate();
    return (
        <li
            className={styles["flat-item"]}
            onClick={() => navigate(`/flats/${id}`)}
        >
            <div className={styles["image"]}>
                <img src={layout_image} alt="Планировка квартиры" />
            </div>

            <div className={styles["info"]}>
                <h2 className={styles["price"]}>
                    {price.toLocaleString("de-DE")} ₽
                </h2>
                <p className={styles["total-area"]}>
                    Общая площадь: {area_total} м<sup>2</sup>
                </p>
                <p className={styles["floor"]}>Этаж: {floor}</p>
                <p className={styles["rooms"]}>Кол-во комнат: {rooms}</p>
            </div>
        </li>
    );
};

export default FlatItem;
