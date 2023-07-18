import React from "react";
import styles from "./Pagination.module.scss";
import range from "lodash.range";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../redux/filters/selectors";
import { setPaginate } from "../../../redux/filters/slice";
import { flatsSelector } from "../../../redux/flats/selectors";

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const { paginate } = useSelector(filtersSelector);

    const { totalCount } = useSelector(flatsSelector);
    const pageCount = Math.ceil(totalCount / paginate.limit);

    const pages = range(1, pageCount + 1);

    const handleClick = (newPage: number) => {
        window.scrollTo(0, 0);
        dispatch(setPaginate({ page: newPage, limit: 8 }));
    };

    if (pageCount === 1) {
        return <></>;
    }

    return (
        <ul className={styles["pagination"]}>
            {pages.map((page) => (
                <li
                    key={page}
                    className={page === paginate.page ? styles["active"] : ""}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
