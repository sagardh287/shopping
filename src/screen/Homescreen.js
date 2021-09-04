import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Footer from './Footer'
import Main from './Main'

export default function Homescreen() {
    return (
        <div  className="bgimg">
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
        </div>
        )
}
