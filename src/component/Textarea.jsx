import React from 'react'
import { useState } from 'react';
import Alert from './Alert';
export default function Textarea(props) {
  const [text,setText]=useState("");
  const [alerts,setAlert]=useState(true)
  const change = ()=>{
      setText(text.toUpperCase());
      setalert(true);
      
  }
  const changes = ()=>{
    setText(text.toLowerCase());
    setalert(true)
  }
  function changeFont(){
  const textform =document.getElementById('text')  
  const font=textform.style.fontFamily;  
  if(font === "small-caption"){
    textform.style.fontFamily="Arial, sans-serif";
  }
  else{
    textform.style.fontFamily="small-caption";
  }
}
return (
  
  <>
   
  <div className={`textform bg-${props.mode==='dark'? 'dark':'light mb-3'}  text-${props.mode==='dark'? 'light':'dark'}`  } style={{marginTop:'20px'}}>
    
    <form>
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label"><h1>Enter the text in textBox</h1></label>
  <textarea className='form-control ' id='text'  placeholder='Enter text here' style={{backgroundColor:props.mode==='dark'? 'gray':'white',color:props.mode==='dark'? 'white':'black',fontSize:'25px'}} value={text} onChange={(e) => setText(e.target.value)} rows="8" ></textarea>
</div>
</form>
  </div>
  <button type="submit" id="toupper" className="btn btn-primary mx-2 my-3" onClick={change} >convert to uppercase</button>

  <button type="submit" className="btn btn-primary mx-2"  onClick={changes} >convert to lowercase</button>
  <button className="btn btn-primary   mx-2 " onClick={changeFont}>change font</button>
  <div className={`container mp-3 `}>
      <h1>Text summery</h1>
      <p>{text.length} charecter in above text and {text.split(' ').length} </p>
  </div>

  </>
)
}
