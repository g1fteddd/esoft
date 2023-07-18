import React from "react";
import styles from "./Rooms.module.scss";
import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import { TRooms } from "../../../../redux/filters/types";
import { toggleRooms } from "../../../../redux/filters/slice";

const allRooms: TRooms[] = ["1", "2", "3"];

const Rooms: React.FC = () => {
    const dispatch = useAppDispatch();
    const { rooms } = useSelector(filtersSelector);
    const handleClick = (value: TRooms) => {
        dispatch(toggleRooms(value));
    };
    return (
        <div className={styles["rooms"]}>
            <p className={styles["label"]}>Комнаты</p>
            <ul className={styles["checkbox"]}>
                {allRooms.map((item) => (
                    <li
                        key={item}
                        className={rooms.includes(item) ? styles["active"] : ""}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </li>
                ))}
                {/* <li>Студия</li>
                <li className={styles["active"]}>1</li>
                <li>2</li>
                <li>3+</li> */}
            </ul>
        </div>
    );
};

export default Rooms;
