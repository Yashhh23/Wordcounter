import React, {useState} from 'react'

export default function Form(props){
    const ToUpperCase =() =>{
        // console.log('Convert Into ToUpperCase'+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.koibhi('converted to uppercase');
    }
    const ToLowerCase =() =>{
        // console.log('Convert Into ToLowerCase'+ text)
        let newText = text.toLowerCase();
        setText(newText)
        props.koibhi('converted to lowercase');

    }
    const Clear =() =>{
        let newText = text.slice(text.length);
        setText(newText)
        props.koibhi('Text Dissapper succesfully');
    }
    const Remove =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.koibhi('Spaces Removed');
    }

    // const Bold =() =>{
    //     // let newText = document.text.style.fontWeight = "bold";
    //     // newText.select();
    //     // setText(newText)
    //     let newText = document.body.text.style.fontWeight = "bold";
    //     document.body.text.selection.style.fontWeight.bold = true;
    //     document.editor.toggleBold();
    //     setText(newText);
    //     props.koibhi('converted to Bold Text');
    // }
const Capital =() =>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.koibhi('Capitaled Succefully');
}
    const copyToClipboard =() =>{
        let newText = document.getElementById('exampleFormControlTextarea1')
        newText.select()
        navigator.clipboard.writeText(newText.value);
        props.koibhi('Text Copied');
      }
    const BackGroundGreen =() =>{
        document.body.style.backgroundColor= "green";
    }
    const BackGroundRed =() =>{
        document.body.style.backgroundColor= "red";
    }
    const BackGroundBlack =() =>{
        document.body.style.backgroundColor= "black";
    }
    const BackGroundLime =() =>{
        document.body.style.backgroundColor= "lime";
    }
    const BackGroundYellow =() =>{
        document.body.style.backgroundColor= "yellow";
    }
    const OnChange =(event) =>{
        // console.log('onchange')
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Your Text Here');

    return(
        <div className="container" style={{color: props.Mode==='dark'?'white':'black'}}>
            <br/>
            <h1 style={{color: 'black',backgroundColor:'#B9D9EB'}}>{props.heading}</h1>
<div className="d-grid gap-2 d-md-block">
  <textarea className="form-control" value={text} onChange={OnChange} id="exampleFormControlTextarea1"  rows="3"></textarea><br/>
  <button disabled={text.length===0} className="btn btn-primary" onClick={ToUpperCase}>Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary" onClick={ToLowerCase}>Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary" onClick={Clear}>Clear</button>
  <button disabled={text.length===0} className="btn btn-primary" onClick={Remove}>Remove Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary" onClick={copyToClipboard}>Copy</button>
  {/* <button disabled={text.length===0} className="btn btn-primary" onClick={Bold}>Bold</button> */}
  <button disabled={text.length===0} className="btn btn-primary" onClick={Capital}>Capital</button>
</div>
<br/>
<h1 style={{color: 'black',backgroundColor:'#B9D9EB'}}>Word Counter</h1>
<p>{text === ''?0: text.split(" ").length} Words & {text.length} Character</p>
<p>{text.length*0.008}</p>
   <h1 style={{color: 'black',backgroundColor:'#B9D9EB'}}>Preview</h1>
   <p>{text}</p>
   <h1 style={{color: 'black',backgroundColor:'#B9D9EB'}}>Background Colour Changer</h1>
   <button className="btn btn-success" onClick={BackGroundGreen}>Green</button>
   <button className="btn btn-danger" onClick={BackGroundRed}>Red</button>
   <button className="btn btn-dark" onClick={BackGroundBlack}>Black</button> 
   <button className="btn btn-success" onClick={BackGroundLime}>Lime</button>
   <button className="btn btn-warning" onClick={BackGroundYellow}>Yellow</button>   
        </div>
    )
}