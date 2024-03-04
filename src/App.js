import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      const btnPrimaryElements = document.querySelectorAll('.btn-primary');
      if (btnPrimaryElements.length > 0) {
        btnPrimaryElements.forEach(btn => {
          btn.style.backgroundColor = '#212529';
        });
      }
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      const btnPrimaryElements = document.querySelectorAll('.btn-primary');
      if (btnPrimaryElements.length > 0) {
        btnPrimaryElements.forEach(btn => {
          btn.style.backgroundColor = '#0d6efd';
        });
      }
      showAlert("Light mode has been enabled", "success");
    }
  }

  let alertBoxStyle = {
    width: 'auto',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="alertBox" style={alertBoxStyle}>
        <Alert alert={alert} />
      </div>
      <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
      <Footer />
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
