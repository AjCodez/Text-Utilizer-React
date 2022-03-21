import React, { useState } from 'react'


export default function TextForm(props) {
    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const loClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const copyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // console.log(useState('Enter your text here'));
    return (
        <>
            <div>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <label htmlFor="myTextBox" className="form-label"><h4 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text Area</h4></label>
                    <textarea className="form-control" id="myTextBox" value={text} onChange={onChange} placeholder="Enter text here" style={{ color: props.mode === 'dark' ? 'white' : 'black', background: props.mode === 'dark' ? '#b2a6a6' : 'white' }} rows="6"></textarea>
                </div>
                <button className={`btn btn-${props.mode} mx-1 my-1`} disabled={text.length===0} onClick={upClick}>Convert to uppercase</button>
                <button className={`btn btn-${props.mode} mx-1 my-1`} disabled={text.length===0} onClick={loClick}>Convert to lowercase</button>
                <button className={`btn btn-${props.mode} mx-1 my-1`} disabled={text.length===0} onClick={copyClick}>Copy Text</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your text Summary</h4>
                <p>You have {text.split(/\s/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters.</p>
                <p>{0.008 * parseFloat(text.split(/\s/).filter((ele)=>{return ele.length!==0}).length)} Minutes to read.</p>
                <p>
                    <button className="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        View Text
                    </button>
                </p>
            </div>
            <div>
                <div className="collapse" id="collapseWidthExample">
                    <div className="card card-body">
                        {text.length === 0 ? 'Enter some text in box above' : text}
                    </div>
                </div>
            </div>
        </>
    )
}
