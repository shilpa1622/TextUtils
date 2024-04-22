import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled", "success")
     // document.title = 'TextUtils-Dark Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
     // document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <div>
      <Router>
        <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Route path="/" element={<Layout />}> */}
          <Routes>
            <Route path="About" element={<About mode={mode} />}>
            </Route>

            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} >

            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
