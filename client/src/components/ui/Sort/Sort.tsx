import React from "react";
import styles from "./Sort.module.scss";

import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../redux/filters/selectors";
import { setSort } from "../../../redux/filters/slice";

const allSort = [
    { id: 1, value: "price", name: "по цене" },
    { id: 2, value: "area_total", name: "по площади" },
];

const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const { sort } = useSelector(filtersSelector);

    const handleClick = (value: string) => {
        dispatch(
            setSort({ value, order: sort.order === "desc" ? "asc" : "desc" })
        );
    };

    return (
        <ul className={styles["sort"]}>
            {allSort.map((item) => (
                <li
                    key={item.id}
                    className={
                        sort.value === item.value ? styles["active"] : ""
                    }
                    onClick={() => handleClick(item.value)}
                >
                    {sort.value === item.value ? (
                        <svg
                            transform={
                                sort.order === "asc" ? "rotate(-180 0 0)" : ""
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => handleClick(item.value)}
                        >
                            <path
                                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#FFFFFF"
                            />
                        </svg>
                    ) : (
                        ""
                    )}
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default Sort;
