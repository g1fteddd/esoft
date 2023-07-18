import React from "react";
import styles from "./Floor.module.scss";
import NumberField from "../../../common/NumberField";
import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import { setFloor } from "../../../../redux/filters/slice";

const Floor: React.FC = () => {
    const dispatch = useAppDispatch();
    const { floor } = useSelector(filtersSelector);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.min(parseInt(e.target.value), 100) || "";
        dispatch(setFloor(newValue.toString()));
    };
    return (
        <div className={styles["floor"]}>
            <p className={styles["label"]}>Этаж</p>
            <NumberField
                value={floor}
                onChange={handleChange}
                placeholder="Этаж"
            />
        </div>
    );
};

export default Floor;
