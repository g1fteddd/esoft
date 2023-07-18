import React from "react";
import styles from "./Main.module.scss";
import Filters from "../../components/ui/filters";
import Sort from "../../components/ui/Sort";
import FlatsList from "../../components/ui/flats/FlatsList";
import Pagination from "../../components/ui/Pagination";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["wrapper"]}>
            <Filters />

            <div className={styles["flats"]}>
                <button
                    className={styles["plan-btn"]}
                    onClick={() => navigate("/plan")}
                >
                    Планировка этажей секции
                </button>

                <Sort />
                <br />
                <FlatsList />
                <Pagination />
            </div>
        </div>
    );
};

export default Main;
