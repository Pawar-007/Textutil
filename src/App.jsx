// import './Appa.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import { Outlet } from 'react-router-dom';
function App() {
  const[mode,setmode]=useState('light');
  function toogle(){
     if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='rgba(33, 37, 41, 0.75)';
     }
     else{
      setmode('light');
      document.body.style.backgroundColor='white';
     }
  }

  return (
    <>
   <Navbar/>
   <Outlet/>
   <Textarea/>
   </>
  );  
}

export default App;

