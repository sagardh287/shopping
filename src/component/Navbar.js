import React from 'react'
import { Link } from 'react-router-dom'
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
                        <button type="button" class="btn-close text-reset bg-primary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body navcontent p-0">
                        <ul class="navbar-nav justify-content-end flex-grow-1 navul">
                            <li class="nav-item navlist">
                                <Link class="nav-link pt-1 pb-1 navlink" to="/">Home</Link>
                            </li>
                            <li class="nav-item navlist">
                                <Link class="nav-link navlink" to="/product" >Product</Link>
                            </li>
                            {/* <li class="nav-item navlist ">
                                <Link class="nav-link navlink" to="/" >Contact us</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
