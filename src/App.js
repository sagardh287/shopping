import React from 'react'
import Homescreen from './screen/Homescreen';
import {BrowserRouter as Router } from "react-router-dom"



function App() {
    return (
        <div>
            <Router>
            <Homescreen/>
            </Router>
            {/* <h1>sagar</h1> */}
        </div>
    )
}


export default App;
