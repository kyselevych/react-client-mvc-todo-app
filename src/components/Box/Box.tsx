import React from "react";

import './box.scss';

type BoxProps = {
	children : React.ReactNode
}

function Box({children} : BoxProps) {
	return (
		<div className="box">{children}</div>
	);
}

export default Box;