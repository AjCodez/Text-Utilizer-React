import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleModeDark = () => {
      setMode('dark');
      document.body.style.backgroundColor = '#5d5d5d';
    }
  const toggleModeLight = () => {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  const toggleModeGreen = () => {
      setMode('success');
      document.body.style.backgroundColor = 'rgb(66 183 66)';
    }
  const toggleModeRed = () => {
      setMode('danger');
      document.body.style.backgroundColor = 'rgb(215 96 96)';
    }
  const toggleModeYellow = () => {
      setMode('warning');
      document.body.style.backgroundColor = '#cda734';
    }

  return (
    <>
      <Navbar title="Hello Aj" about="About Aj" mode={mode} toggleModeDark={toggleModeDark} toggleModeLight={toggleModeLight} toggleModeGreen={toggleModeGreen} toggleModeYellow={toggleModeYellow} toggleModeRed={toggleModeRed}/>
      <div className="container my-3">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
