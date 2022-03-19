import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleModeDark = () => {
      setMode('dark');
      document.body.style.backgroundColor = '#5d5d5d';
      showAlert("Dark theme has been enabled", "success");
    }
  const toggleModeLight = () => {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light theme has been enabled", "success");
    }
  const toggleModeGreen = () => {
      setMode('success');
      document.body.style.backgroundColor = 'rgb(66 183 66)';
      showAlert("Green theme has been enabled", "success");
    }
  const toggleModeRed = () => {
      setMode('danger');
      document.body.style.backgroundColor = 'rgb(215 96 96)';
      showAlert("Red theme has been enabled", "success");
    }
  const toggleModeYellow = () => {
      setMode('warning');
      document.body.style.backgroundColor = '#cda734';
      showAlert("Yellow theme has been enabled", "success");
    }

  return (
    <>
    <Router>

      <Navbar title="Aj's main app" about="About Aj" mode={mode} toggleModeDark={toggleModeDark} toggleModeLight={toggleModeLight} toggleModeGreen={toggleModeGreen} toggleModeYellow={toggleModeYellow} toggleModeRed={toggleModeRed}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
        <TextForm mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
