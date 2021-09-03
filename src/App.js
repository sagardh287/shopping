import './App.css';
import Homescreen from './screen/Homescreen';
import {BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Homescreen/>
      </Router>
    </div>
  );
}

export default App;
