import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Alert from './Components/Alert';
import Dlmode from './Components/Dlmode';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App(){
  const [alert, setAlert] = useState(null);
  const koibhi = (msg,type) =>{
    setAlert({msg:msg,type:type});
    setTimeout ( () => {
      setAlert(null);
    },2000);
    setInterval(() => {
      document.title = 'Word Counter'
    },);

  }
      const [Mode, setMode] = useState('light');
      const toggleMode =() =>{
        if (Mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'grey';
          document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "grey";
          document.getElementById("exampleFormControlTextarea1").style.color = "white";
          koibhi("success","dark mode")
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
          document.getElementById("exampleFormControlTextarea1").style.color = "black";
          koibhi("success","light mode")
 
        }
    }
  return (
    <>
    <Router>
    <Nav title='Word Counter' Mode={Mode} toggleMode={toggleMode} koibhi = {koibhi}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<Form heading='Enter Text' koibhi = {koibhi}/>}/>
      <Route path='/Dlmode' element={<Dlmode/>}/>
    </Routes>
    </Router>
    </>
  );
}


export default App;