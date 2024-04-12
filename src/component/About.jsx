import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
export default function About(props) {
    let page={
        color:"white",
        backgroundColor:'black',
        fontFamily:"british",
        border:"2px solid white",
        padding:"20px"
    }
    const[light,dark]=useState();
    function darkMode(){
        if(light==null){
            dark(page)
            document.getElementById('changeColor').innerHTML="light mode";
            document.getElementById('changeColor').style.background="white";
            document.getElementById('changeColor').style.color="black";
        }
        else{
      dark()
      document.getElementById('changeColor').innerHTML="dark mode";
      document.getElementById('changeColor').style.background="blue";
      document.getElementById('changeColor').style.color="white";
        }
    }
    let cont={
        padding:'10px',
    }
  return (
    <>
    <Navbar/>
    <div className={`my-3 text-${props.mode==='dark'? 'light':'dark'}`} >
      <h1>fill form</h1>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control"   id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
</div>
<button className='btn btn-primary' id='changeColor' onClick={darkMode} >dark mode</button>
    </div>
    </>
  )
}
