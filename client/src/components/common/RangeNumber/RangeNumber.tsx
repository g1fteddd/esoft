import React from "react";
import styles from "./RangeNumber.module.scss";
import NumberField from "../NumberField";

interface IRangeNumberProps {
    label: string;
    range: {
        from: string;
        to: string;
    };
    onChangeFrom: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: {
        from: string;
        to: string;
    };
}

const RangeNumber: React.FC<IRangeNumberProps> = ({
    label,
    range,
    onChangeFrom,
    onChangeTo,
    placeholder,
}) => {
    return (
        <div className={styles["range-number"]}>
            <p className={styles["label"]}>{label}</p>
            <div className={styles["wrapper"]}>
                <NumberField
                    value={range.from}
                    onChange={onChangeFrom}
                    placeholder={placeholder.from}
                />
                <NumberField
                    value={range.to}
                    onChange={onChangeTo}
                    placeholder={placeholder.to}
                />
            </div>
        </div>
    );
};

export default RangeNumber;
