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
                <div className="mb-3" style= {{color:props.mode==='light'?'black':'white'}}>
                    <label htmlFor="myTextBox" className="form-label"><h4 style= {{color:props.mode==='light'?'black':'white'}}>Text Area</h4></label>
                    <textarea className="form-control" id="myTextBox" value={text} onChange={onChange} placeholder="Enter text here" style= {{color:props.mode==='light'?'black':'white',  background:props.mode==='light'?'white':'#b2a6a6'}} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={upClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={loClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={() => {navigator.clipboard.writeText(text)}}>Copy Text</button>
            </div>
            <div className="container my-4" style= {{color:props.mode==='light'?'black':'white'}}>
                <h4>Your text Summary</h4>
                <p>You have {text.length === 0 ? 0 : text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * parseFloat(text.length === 0 ? 0 : text.split(" ").length)} Minutes to read.</p>
                <h4>Preview</h4>
                <p>{text.length===0?'Enter some text in box above':text}</p>
            </div>
        </>
    )
}
