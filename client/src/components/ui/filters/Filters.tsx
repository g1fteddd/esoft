import React, { useState } from "react";
import styles from "./Filters.module.scss";
import Floor from "./Floor";
import Price from "./Price";
import Rooms from "./Rooms";
import AreaTotal from "./AreaTotal";
import AreaKitchen from "./AreaKitchen";
import AreaLive from "./AreaLive";

const Filters: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles["filters"]}>
            <h2 className={styles["filters-text"]}>Фильтры</h2>
            <div className={styles["main"]}>
                <Floor />
                <Price />
                <Rooms />
                <AreaTotal />
            </div>
            <button
                className={styles["optional-button"]}
                onClick={() => setIsOpen(!isOpen)}
            >
                Дополнительные параметры
            </button>
            <div className={styles["second"]}>
                {isOpen && (
                    <>
                        <AreaKitchen />
                        <AreaLive />
                    </>
                )}
            </div>
        </div>
    );
};

export default Filters;
