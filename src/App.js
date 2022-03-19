import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(38 38 70)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Hello Aj" about="About Aj" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
