import React, {CSSProperties} from 'react';

import './button.scss';

type ButtonProps = {
    children? : React.ReactNode,
    style?: CSSProperties,
    type?: "button" | "submit" | "reset"
}

function Button(props : ButtonProps) {
    const {children, style = {}, type = "button"} = props;

	return (
		<button type={type} className="button" style={style}>{children}</button>
	);
}

export default Button;