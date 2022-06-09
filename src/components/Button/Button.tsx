import React, {CSSProperties} from 'react';

import './button.scss';

type ButtonProps = {
    children?: React.ReactNode,
    style?: CSSProperties,
    type?: "button" | "submit" | "reset",
    size?: "default" | "small",
    styleType?: "primary" | "secondary",
    onClick?: () => void
}

function Button(props: ButtonProps) {
    const {
        children,
        style = {},
        type = "button",
        size = "default",
        styleType = "primary",
        onClick
    } = props;

    let sizeClass: string;
    let styleTypeClass: string;

    switch (size) {
        case "small":
            sizeClass = "button--small";
            break;
        default:
            sizeClass = "";
            break;
    }

    switch (styleType) {
        case "primary":
            styleTypeClass = "";
            break;
        case "secondary":
            styleTypeClass = "button--secondary";
            break;
    }

    return (
        <button
            type={type}
            className={`button ${sizeClass} ${styleTypeClass}`}
            style={style}
            onClick={onClick}

        >
            {children}
        </button>
    );
}

export default Button;