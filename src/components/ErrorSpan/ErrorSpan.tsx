import React from "react";

import './errorSpan.scss';

type ErrorSpanProps = {
    children?: React.ReactNode
}

function ErrorSpan({children}: ErrorSpanProps) {
    return (
        <span className="error-span">{children}</span>
    );
}

export default ErrorSpan