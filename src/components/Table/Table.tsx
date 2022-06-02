import React from 'react';

import "./table.scss";

type TableProps = {
    columns: {
        width: number | string,
        name: string
    }[],
    children: React.ReactNode
}

function Table({columns, children}: TableProps) {
    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column, index) =>
                    <th key={index} style={{width: column.width + '%'}}>{column.name}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    );
}

export default Table;