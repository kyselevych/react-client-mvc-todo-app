import React from 'react';

import './space.scss';

type SpaceProps = {
    direction? : "vertical" | "horizontal",
    className? : string,
    children? : React.ReactNode,
    style? : React.CSSProperties,
    maxGrow?: boolean
}

function Space(props : SpaceProps) {
	const {children,
		direction = "vertical",
		className = "",
		style = {},
        maxGrow = false
	} = props;

    let spaceClassName: string;
	let directionClass : string;
	let maxGrowClass : string;

	switch (direction) {
		case "vertical": {
			directionClass = "space--vertical";
			break;
		}
		case "horizontal": {
			directionClass = "space--horizontal";
			break;
		}
		default: {
			throw new Error("Incorrect value of 'direction'");
		}
	}

    maxGrowClass = maxGrow ? 'space--max' : '';

    spaceClassName = `space ${directionClass} ${className} ${maxGrowClass}`;
	
	return (
		<div className={spaceClassName} style={style}>
			{children}
		</div>
	);
}

export default Space;