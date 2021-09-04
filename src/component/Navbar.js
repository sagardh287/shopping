import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-dark sticky-top ">
            <div class="container-fluid ">
                <h1 className="logo mb-0 text-light">Shopping</h1>
                <div className="d-md-flex d-none ms-auto">
                <ul class="navbar-nav justify-content-end flex-grow-1 flex-row">
                    <li class="nav-item m-3">
                        <Link class="nav-link" to="/" aria-current="page" ><span>Home</span></Link>
                    </li>
                    <li class="nav-item m-3">
                        <Link class="nav-link" to="/" ><span>Home</span></Link>
                    </li>
                </ul>
                </div>

                <button class="navbar-toggler d-md-none d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon bgdar"></span>
                </button>

                
                <div class="offcanvas offcanvas-start"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body align-items-center">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/" >Link</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
