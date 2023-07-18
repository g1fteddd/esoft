import React from "react";

import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import {
    setAreaTotalFrom,
    setAreaTotalTo,
} from "../../../../redux/filters/slice";
import RangeNumber from "../../../common/RangeNumber";
const AreaTotal: React.FC = () => {
    const dispatch = useAppDispatch();
    const { areaTotal } = useSelector(filtersSelector);
    return (
        <RangeNumber
            label="Общая площадь"
            range={areaTotal}
            onChangeFrom={(e) => dispatch(setAreaTotalFrom(e.target.value))}
            onChangeTo={(e) => dispatch(setAreaTotalTo(e.target.value))}
            placeholder={{ from: "от, м²", to: "до, м²" }}
        />
    );
};

export default AreaTotal;
