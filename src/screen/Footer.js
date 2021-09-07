import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
    const link="http://www.google.com"
    return (
        <div className="container-fluid mt-3 pb-3 pt-3 bg-success">
            <div className="row justify-content-center">
                <div className="col-md-6 d-flex flex-md-row justify-content-evenly">
                    <ul className="list-unstyled d-flex flex-sm-row ">
                        <li className="">
                            <Link className="nav-link navlink text-light" to={{pathname:link}} target="_blank" >
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link className="nav-link navlink text-light" to="">
                                Product
                            </Link>
                        </li>
                        <li className="">
                            <Link className="nav-link navlink text-light" to="">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="col-md-6 d-flex flex-row justify-content-center" style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon className="m-2" icon={faFacebookSquare} />
                    <FontAwesomeIcon className="m-2" icon={faInstagram} />
                    <FontAwesomeIcon className="m-2" icon={faYoutube} />
                    <FontAwesomeIcon className="m-2" icon={faWhatsapp} />
                </div>
            </div>

        </div>
    )
}
