import React,{useState}from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
    //this is state syntax 
    const[text, setText] = useState("");

    // text = "new text" // wrong way to change the state
    // setText("new text"); // write way to change the state

    const handleUpCLick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLowerCLick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleCopy = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleClearCLick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Started text to Speech!","success");
      }


    const handleOnChange = (event) =>{
        console.log("On chnage was clicked")
        setText(event.target.value);
    }

    return (
    <>
    <div>
        <div className="conatiner my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#e41010':'white',color: props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleUpCLick}>
            Covert toUpperCase
        </button>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleLowerCLick}>
            Covert toLowerCase
        </button>

        <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleCopy}>
            Copy text
        </button>

        <button disabled = {text.length===0} type="submit" onClick={speak} className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`}>Text to Speak</button>

        <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleClearCLick}>
            Clear Text
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Summary : </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words are there having {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read this text.</p>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Text Preview</h2>
        <p>{text.length === 0 ? "Enter some text to preview": text}</p>
    </div>

    </>
  )
}
Textbox.propTypes = {
    heading : PropTypes.string,
}
