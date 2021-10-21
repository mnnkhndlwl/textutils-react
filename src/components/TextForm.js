import React, { useState } from 'react'



export default function TextFor(props) {

    const handleUpClick = () => {
       
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success");
       
    }
    const handleLowClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase","success");
    }
    const handleClearText = () => {

        let newText = '';
        setText(newText)
        props.showAlert("All Text Cleared","success");
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied Successfully","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Successfully removed extraspaces","success");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label font-weight-bolder">{props.heading}</label>
                    <textarea className="form-control" value={text} style={{ backgroundcolour: props.mode ==='dark'?'grey':'white', 
                    color: props.mode === 'dark' ? 'black' : 'black' }}
                        onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3  mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className="btn btn-danger my-3 mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
                    <button className="btn btn-success my-3  mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-secondary my-3 mx-2" onClick={handleCopy}>Copy text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length - 1} : Words And {text.length} : Characters</p>
                <p></p>
            </div>
        </>
    )
}
