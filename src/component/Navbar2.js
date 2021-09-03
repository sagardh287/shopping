import React from 'react'

export default function Navbar2() {
    return (
        <div>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-4 bg-dark vh-100">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" style={{ display: 'flex', flexDirection: 'column' }}>
                <div class="justify-content-evenly">
                <a class="navbar-brand" href="#">Navbar scroll</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarScroll"  >
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ display: 'flex', flexDirection: 'column' }}>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
                </div>
            </div>
        </div>
        </div>
       
    )
}
