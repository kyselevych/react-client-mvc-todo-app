import React from "react";
import Field from "components/Field/Field";

function StorageSelect() {
    return (
        <Field style={{marginLeft: "auto"}} theme="dark">
            <select>
                <option>Xml</option>
                <option>Mssql</option>
            </select>
        </Field>
    );
}

export default StorageSelect;