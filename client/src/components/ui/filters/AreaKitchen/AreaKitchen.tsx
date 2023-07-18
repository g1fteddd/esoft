import React from "react";

import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import {
    setAreaKitchenFrom,
    setAreaKitchenTo,
} from "../../../../redux/filters/slice";
import RangeNumber from "../../../common/RangeNumber";

const AreaKitchen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { areaKitchen } = useSelector(filtersSelector);
    return (
        <RangeNumber
            label="Площадь кухни"
            range={areaKitchen}
            onChangeFrom={(e) => dispatch(setAreaKitchenFrom(e.target.value))}
            onChangeTo={(e) => dispatch(setAreaKitchenTo(e.target.value))}
            placeholder={{ from: "от, м²", to: "до, м²" }}
        />
    );
};

export default AreaKitchen;
