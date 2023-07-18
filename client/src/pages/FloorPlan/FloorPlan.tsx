import React, { useEffect, useState } from "react";
import styles from "./FloorPlan.module.scss";

import axios from "axios";
import { IFlat } from "../../redux/flats/types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedFlatsSelector } from "../../redux/selectedFlats/selectors";
import { useAppDispatch } from "../../redux/store";
import { toggleSelectedFlats } from "../../redux/selectedFlats/slice";

const FloorPlan: React.FC = () => {
    const pathFlat = [
        "m 499.04668,1186.801 -13.41523,-0.8944 0.89435,17.887 h -25.93612 l 0.89435,240.5799 366.68305,0.8943 -0.89435,-172.6093 h 18.78132 l 1.7887,-170.8207 H 558.96806 v 82.2801 z",
        "M 457.90663,1124.1966 457.01229,959.63636 7.1547912,960.53071 8.0491401,1110.7813 H 25.936118 l 1.788698,334.4865 430.181814,0.8944 z",
        "M 459.69533,760.19656 V 642.14251 H 7.1547912 v 314.81081 l 452.5405388,-1.7887 z",
        "M 458.80098,634.98772 V 330.90909 L 26.830467,330.01474 V 495.46929 H 8.0491401 l 0.8943488,143.09582 450.7518411,1.7887 z",
        "m 461.48403,430.18182 h 87.64619 v -16.99263 h 27.72482 v 10.73219 H 685.9656 v -79.59706 h 18.78133 L 703.85258,58.132678 H 647.5086 V 3.5773956 L 509.77887,5.3660934 V 54.555283 L 249.52334,56.34398 V 6.2604423 L 51.872236,7.1547912 52.766585,117.15971 H 26.830467 L 27.724816,327.3317 H 461.48403 Z",
        "M 1071.43,799.54791 V 55.449631 l -364.89437,-3.577395 1.78869,295.135134 h -19.67567 v 80.4914 l -112.68796,-1.7887 1.7887,109.11057 h 132.36363 v 261.14988 z",
    ];
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [currentFloor, setCurrentFloor] = useState(1);
    const [hidden, setHidden] = useState(false);
    const selectedFlats = useSelector(selectedFlatsSelector);
    const [allFlatsId, setAllFlatsId] = useState<number[][]>([]);

    useEffect(() => {
        const getAllFlats = async () => {
            const res = await axios.get("http://localhost:5000/allflats");
            const flats = res.data as IFlat[];
            const flatsId = flats.map((item) => item.id);

            const length = flatsId.length;
            const partSize = Math.floor(length / 4);
            const result = [];

            for (let i = 0; i < length; i += partSize) {
                const slice = flatsId.slice(i, i + partSize);
                result.push(slice);
            }

            setAllFlatsId(result);
        };

        getAllFlats();
    }, []);

    const handleClickFloor = (floor: number) => {
        setCurrentFloor(floor);
        setHidden(true);
        setTimeout(() => setHidden(false), 500);
    };

    const handleClickFlat = (id: number) => {
        dispatch(toggleSelectedFlats(id));
    };

    const handleClickSelectedFlat = (id: number) => {
        navigate(`/flats/${id}`);
    };

    return (
        <div className={styles["wrapper"]}>
            <ul className={styles["change-floor"]}>
                {[...Array(4)]
                    .map((_, index) => (
                        <li
                            key={index}
                            className={
                                index + 1 === currentFloor
                                    ? styles["active"]
                                    : ""
                            }
                            onClick={() => handleClickFloor(index + 1)}
                        >
                            {index + 1}
                        </li>
                    ))
                    .reverse()}
            </ul>
            <div
                className={[
                    styles["map__wrapper"],
                    styles[hidden ? "hide" : ""],
                ].join(" ")}
            >
                <svg viewBox="0 0 1080 1456">
                    {allFlatsId.length &&
                        pathFlat.map((path, index) => (
                            <path
                                key={index}
                                onClick={() =>
                                    handleClickFlat(
                                        allFlatsId[currentFloor - 1][index]
                                    )
                                }
                                className={[
                                    styles["flat"],
                                    styles[
                                        selectedFlats.includes(
                                            allFlatsId[currentFloor - 1][index]
                                        )
                                            ? "active"
                                            : ""
                                    ],
                                ].join(" ")}
                                d={path}
                            />
                        ))}
                </svg>
                <img src="./map.png" alt="" />
            </div>
            {selectedFlats.length ? (
                <div className={styles["selected-flats"]}>
                    <p>Выбранные квартиры: </p>
                    <ul>
                        {selectedFlats.map((flatId) => (
                            <li
                                key={flatId}
                                onClick={() => handleClickSelectedFlat(flatId)}
                            >
                                Id: {flatId}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default FloorPlan;
