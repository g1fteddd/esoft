import React from "react";
import styles from "./NumberField.module.scss";

interface INumberFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const NumberField: React.FC<INumberFieldProps> = ({
    value,
    onChange,
    placeholder,
}) => {
    return (
        <input
            type="number"
            placeholder={placeholder}
            className={styles["input"]}
            value={value}
            onChange={onChange}
        />
    );
};

export default NumberField;
