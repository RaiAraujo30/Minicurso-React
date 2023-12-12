import React from "react";

export default function FormDataDisplay ({formdata}) {
    return (
        <div>
            <h2>Sumitted Data</h2>
            <p>Name:  {formdata.name} </p>
            <p>Email {formdata.email} </p>
        </div>

    )
}