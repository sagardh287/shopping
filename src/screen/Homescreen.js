import React from 'react'
import Header from '../component/Header'
import Footer from './Footer'
import Main from './Main'
import "./Main.css"
// import { Link } from 'react-router-dom'

export default function Homescreen() {
    return (
        <div className="">
            
            <Header/>
            {/* <ul class="navbar-nav justify-content-center flex-grow-1 flex-row mb-5 bg-dark">

                <li class="nav-item navliststyle dropitem ">
                    <Link class="nav-link navliststylelink" to="/" ><span>Product</span></Link>
                    <div className="navdrops">
                        <ul className="navbar-nav">
                            <li class=" navdropliststyle">
                                <Link class=" navlistdroplink" to="/" ><span className="liststyle">HeadPhone</span></Link>

                            </li>
                            <li class=" navdropliststyle">
                                <Link class="navlistdroplink" to="/" ><span class="liststyle">JWellEry</span></Link>
                            </li>
                            <li class=" navdropliststyle">
                                <Link class="navlistdroplink" to="/" ><span class="liststyle">Mobile-Phone</span></Link>
                            </li>
                            <li class=" navdropliststyle">
                                <Link class="navlistdroplink" to="/" ><span class="liststyle">Short-Clothes</span></Link>
                            </li>
                            <li class=" navdropliststyle">
                                <Link class="navlistdroplink" to="/" ><span class="liststyle">Body-Items</span></Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul> */}
            <Main />
            <Footer />
        </div>
    )
}
