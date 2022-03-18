import React, { useState } from 'react'


export default function TextForm(props) {
    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const loClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // console.log(useState('Enter your text here'));
    return (
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="myTextBox" className="form-label">Text Area</label>
                    <textarea className="form-control" id="myTextBox" value={text} onChange={onChange} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={upClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={loClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={() => {navigator.clipboard.writeText(text)}}>Copy Text</button>
            </div>
            <div className="container my-4">
                <h4>Your text Summary</h4>
                <p>You have {text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * parseFloat(text.length === 0 ? 0 : text.split(" ").length)} Minutes to read.</p>
            </div>
        </>
    )
}
