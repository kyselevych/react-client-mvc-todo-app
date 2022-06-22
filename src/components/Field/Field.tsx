import React from 'react';

import './field.scss';

type FieldProps = {
    children: React.ReactNode,
    label?: string
    style?: React.CSSProperties
    theme?: "light" | "dark"
}

function Field(props: FieldProps) {
    const {
        children,
        label = "",
        style = {},
        theme = "light"
    } = props;

    let themeClass: string;

    switch (theme) {
        case "light": {
            themeClass = "field--light";
            break;
        }
        case "dark": {
            themeClass = "field--dark";
            break;
        }
        default: {
            throw Error("Incorrect value of theme");
        }
    }

    return (
        <label className={`field ${themeClass}`} style={style}>
            {label && <span className="field__label">{label}</span>}
            {children}
        </label>
    );
}

export default Field;