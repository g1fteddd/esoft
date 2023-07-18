import React from "react";

import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../../redux/filters/selectors";
import { setPriceFrom, setPriceTo } from "../../../../redux/filters/slice";
import RangeNumber from "../../../common/RangeNumber";

const Price: React.FC = () => {
    const dispatch = useAppDispatch();
    const { price } = useSelector(filtersSelector);

    // TODO: сделать debounce
    return (
        <RangeNumber
            label="Цена"
            range={price}
            onChangeFrom={(e) => dispatch(setPriceFrom(e.target.value))}
            onChangeTo={(e) => dispatch(setPriceTo(e.target.value))}
            placeholder={{ from: "от, ₽", to: "до, ₽" }}
        />
    );
};

export default Price;
