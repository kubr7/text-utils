import React, { useState } from 'react'


export default function TextForm(props) {
     let buttonBoxStyle = {
          display: "flex",
          flexFlow: "row wrap",
          rowGap: "8px",
          justifyContent: "center",
     }

     let buttonStyle = {
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "1px",
          width: "165px",
     }
     let minRead = {
          fontSize: "14px",
          fontWeight: "600",
     }
     const handleUpClick = () => {
          let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("Converted to Upper Case", "success");
     }

     const handleLoClick = () => {
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to Lower Case", "success");
     }

     const handleClearClick = () => {
          let newText = '';
          setText(newText)
          setCount(0)
          props.showAlert("Text Cleared", "success");
     }

     const handleToCopy = () => {
          let newText = document.getElementById("myBox");
          newText.select();
          navigator.clipboard.writeText(newText.value);
          props.showAlert("Text Copied", "success");
     }

     const handleExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra spaces removed", "success");
     }

     const handleOnChange = (event) => {
          setText(event.target.value)
          wordCounter();
     }

     const enterSomething = () => {
          props.showAlert("Enter something", "danger");
     }

     const [text, setText] = useState('');

     const [word, setCount] = useState(0);

     const wordCounter = () => {
          setCount(
               text.split(/[' ']/).length
          )
     }

     return (
          <>
               <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h4>{props.heading}</h4>
                    <div className="mb-3">
                         <textarea className="form-control" id="myBox" value={text} rows="6" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                    </div>
                    <div className="buttons" style={buttonBoxStyle}>
                         <button className='btn btn-primary mx-1 rounded-0' style={buttonStyle} onClick={text === '' ? enterSomething : handleUpClick}>To UpperCase</button>
                         <button className='btn btn-primary mx-1 rounded-0' style={buttonStyle} onClick={text === '' ? enterSomething : handleLoClick}>To LowerCase</button>
                         <button className='btn btn-primary mx-1 rounded-0' style={buttonStyle} onClick={text === '' ? enterSomething : handleToCopy}>Copy Text</button>
                         <button className='btn btn-primary mx-1 rounded-0' style={buttonStyle} onClick={text === '' ? enterSomething : handleExtraSpaces}>Remove Extra Spaces</button>
                         <button className='btn btn-primary mx-1 rounded-0' style={buttonStyle} onClick={text === '' ? enterSomething : handleClearClick}>Clear Text</button>
                    </div>
               </div>
               <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h4>Preview</h4>
                    <textarea className="form-control" id="myBox" value={text.length > 0 ? text : 'Enter something above in textbox to preview it here'} rows="6" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                    <h5 className='mt-2'>Text Summary:</h5>
                    <p><strong>{word} words</strong> and <strong>{text.length} characters</strong>! <span className='minRead' style={minRead}>{0.008 * (text.split(/[' ']/).length)} minutes read.</span></p>
               </div>
          </>
     )
}