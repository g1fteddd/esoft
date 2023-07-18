import React, { useEffect, useState } from "react";
import styles from "./FlatPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { IFlat } from "../../redux/flats/types";

const FlatPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [flat, setFlat] = useState<IFlat>();

    useEffect(() => {
        const fetchFlatById = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/flats?id=${id}`
                );
                setFlat(res.data.flats[0]);
            } catch (error) {
                navigate("/");
            }
        };
        fetchFlatById();
    }, [id]);

    if (!flat) {
        return <h2>Загрузка...</h2>;
    }

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["image"]}>
                <img src={flat.layout_image} alt="Планировка квартиры" />
            </div>
            <div className={styles["info"]}>
                <p className={styles["price"]}>
                    Цена: {flat.price.toLocaleString("de-DE")} ₽
                </p>
                <p className={styles["rooms"]}>
                    Количество комнат: {flat.rooms}
                </p>
                <p className={styles["floor"]}>Этаж: {flat.floor}</p>
                <p className={styles["area-total"]}>
                    Общая площадь: {flat.area_total} м<sup>2</sup>
                </p>
                <p className={styles["area-kitchen"]}>
                    Площадь кухни: {flat.area_kitchen} м<sup>2</sup>
                </p>
                <p className={styles["area-live"]}>
                    Жилая площадь: {flat.area_live} м<sup>2</sup>
                </p>
            </div>
            <button className={styles["back-btn"]} onClick={() => navigate(-1)}>
                Вернуться назад
            </button>
        </div>
    );
};

export default FlatPage;
