import React from "react";

import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import {
    setAreaLiveFrom,
    setAreaLiveTo,
} from "../../../../redux/filters/slice";
import RangeNumber from "../../../common/RangeNumber";

const AreaLive: React.FC = () => {
    const dispatch = useAppDispatch();
    const { areaLive } = useSelector(filtersSelector);
    return (
        <RangeNumber
            label="Жилая площадь"
            range={areaLive}
            onChangeFrom={(e) => dispatch(setAreaLiveFrom(e.target.value))}
            onChangeTo={(e) => dispatch(setAreaLiveTo(e.target.value))}
            placeholder={{ from: "от, м²", to: "до, м²" }}
        />
    );
};

export default AreaLive;
