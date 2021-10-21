
import { useState } from 'react/cjs/react.development';
import './App.css';
import AAlert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFor from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(2, 21, 38)';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode disabled", "warning");
    }

  }
  return (
    <>
      <Router>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <AAlert alert={alert} />
      <div className="contaioner my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextFor showAlert={showAlert} heading="Enter Text to analyse below" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
