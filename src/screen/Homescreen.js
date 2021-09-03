import React from 'react'
import Navbar from '../component/Navbar'
import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'

import './homescreen.css'
import Cardlist from '../component/Cardlist'
import Main from '../screen/Main'
import Footer from './Footer'

export default function Homescreen() {
    return (
        <div  className="bgimg">
            <Navbar/>
            <Header/>
            {/* <Main/> */}
            <Footer/>
        </div>
        )
}
