import React from 'react'
import { Link } from 'react-router-dom'
import sagar from "../data/sagar.png"
import "./navbar.css"
export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-dark sticky-top ">
            <div class="container-fluid ">
                <h1 className="logo text-light">Shopping</h1>
                <div className="d-md-flex d-none ms-auto">
                    <ul class="navbar-nav justify-content-end flex-grow-1 flex-row">
                    <li class="nav-item mt-3 mb-3 navliststyle ">
                                <Link class="nav-link navliststylelink" to="/">Home</Link>
                            </li>
                        <li class="nav-item mt-3 mb-3 navliststyle ">
                            <Link class="nav-link navliststylelink " to="/product" ><span>Product</span></Link>
                            {/* <div className="navdrops">
                                <ul className="navbar-nav">
                                    <li class="nav-item navdropliststyle">
                                        <Link class="nav-link navlistdroplink" to="/" ><span>Ḥome</span></Link>

                                    </li>
                                    <li class="nav-item  navdropliststyle">
                                        <Link class="nav-link navlistdroplink" to="/product" ><span>Product</span></Link>
                                    </li>
                                </ul>
                            </div> */}
                        </li>
                        <div  class="mt-auto d-flex flex-column  align-items-center  bg-dark">
                        <img src={sagar} className="img-fluid developerpicture1 " alt="developer"/>
                                <p className=" developertext1 mb-0 ">Developer</p>
                                {/* <p className=" developertext1 mb-0">Sagar</p> */}
                        </div>
                        {/* <li class="nav-item m-3 navliststyle">
                            <Link class="nav-link navliststylelink" to="/" ><span>Contact Us</span></Link>
                        </li> */}
                    </ul>
                </div>

                <button class="navbar-toggler d-md-none d-flex " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>


                <div className="offcanvas offcanvas-start offback" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header navtitle">
                        <h5 class="offcanvas-title " id="offcanvasNavbarLabel">Shopping</h5>
                        <button type="button" class="btn-close  closebtn p-2" data-bs-dismiss="offcanvas"></button>
                    </div>

                    <div class="offcanvas-body navcontent p-0 bg-danger d-flex flex-column">
                        <ul class="navbar-nav navul">
                            <li class="nav-item navlist">
                                <Link class="nav-link pt-1 pb-1 navlink" to="/">Home</Link>
                            </li>
                            <li class="nav-item navlist">
                                <Link class="nav-link navlink" to="/product" >Product</Link>
                            </li>
                            {/* <li class="nav-item navlist bg-black ">
                               
                            </li> */}
                        </ul>
                        <div  class="mt-auto mb-3  d-flex flex-column  align-items-center  bg-dark">
                        <img src={sagar} className="img-fluid developerpicture " alt="developer"/>
                                <p className=" developertext1 mb-0 ">Developer</p>
                                {/* <p className=" developertext1 mb-0">Sagar</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
