import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import Alert from './Components/Alert';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Routes} from 'react-router-dom';

 
function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleButton = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled","success")
      // document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
      // document.title = 'TextUtils - Light Mode';
    }
  }


  return (
    <>
    <Router>
    {/* <Navbar AboutText="About TextUtils"/> */}
    
    <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleButton = {toggleButton} />

    <Alert alert={alert}/>

    <div className="container my-3">

    <Routes>
        <Route exact path="/About" element={<About mode={mode}/>}>
        </Route>
        <Route exact path="/" element={<Textbox heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
        </Route>
    </Routes>
  
    {/* <Textbox heading="Write the text to Analyze" mode={mode} showAlert={showAlert}/> */}


    </div>
    </Router>

    </>
  );
}

export default App;
