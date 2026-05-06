import React, { useState } from "react";
export default function TextForm(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                >
                    {props.heading}
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="13"
                ></textarea>
            </div>
            <button type="button" className="btn btn-primary">
                Convert to UpperCase
            </button>
        </>
    );
}
