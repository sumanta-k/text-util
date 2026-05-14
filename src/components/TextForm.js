import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(text);
        const newText = text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("on change event happened");
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
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
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className=" mx-2 btn btn-primary"
                    onClick={handleUpClick}
                >
                    Convert to UpperCase
                </button>

                <button
                    type="button"
                    className="mx-3 btn btn-success"
                    onClick={handleLowerCase}
                >
                    Convert to LowerCase
                </button>
            </div>

            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>
                    How Long time will take to read :{" "}
                    {0.008 * text.split(" ").length}
                </p>

                <h2>Preview: </h2>
                <p>{text}</p>
            </div>
        </>
    );
}
