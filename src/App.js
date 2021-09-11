import React from 'react'
import Homescreen from './screen/Homescreen';
import { BrowserRouter as Router ,Route} from "react-router-dom"
import Main from './screen/Main';
import Navbar from './component/Navbar';



function App() {
    return (
        <div>
            <Router>
            <Navbar />
                <Route exact path="/">
                    <Homescreen />
                </Route>
                <Route path="/product">
                
                    <Main />
                </Route>
            </Router>
            {/* <h1>sagar</h1> */}
        </div>
    )
}


export default App;
