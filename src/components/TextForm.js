import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(text);
        const newText = text.toUpperCase();
        setText(newText);
    };
    const [text, setText] = useState("Enter TExt 2");
    return (
        <>
            <h3>{props.title}</h3>
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
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpClick}
            >
                Convert to UpperCase
            </button>
        </>
    );
}
