import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faFacebookSquare , faInstagram,faWhatsapp,faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <div className="container p-2 bg-success">
            <div className="row">
                <div className="col-md-6 d-flex flex-md-row justify-content-sm-center">
                    <div className="row w-100">
                  <div className="col-md-4">
                    <ul className="list-unstyled d-flex flex-sm-row flex-md-column">
                        <li className="p-1">
                            <h5>Server</h5>
                        </li>
                        <li className="p-1">Home</li>
                        <li className="p-1">About</li>
                        <li className="p-1">Feature</li>
                        <li className="p-1">Product</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                  <ul className="list-unstyled d-flex flex-sm-row flex-md-column">
                        <li className="p-1">
                            <h5>Server</h5>
                        </li>
                        <li className="p-1">Home</li>
                        <li className="p-1">About</li>
                        <li className="p-1">Feature</li>
                        <li className="p-1">Product</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                  <ul className="list-unstyled d-md-flex d-none flex-md-column">
                        <li className="p-1">
                            <h5>Server</h5>
                        </li>
                        <li className="p-1">Home</li>
                        <li className="p-1">About</li>
                        <li className="p-1">Feature</li>
                        <li className="p-1">Product</li>
                    </ul>
                  </div>

                    </div>
                </div>
                <div className="col-md-6 d-flex flex-row justify-content-center" style={{fontSize:"40px"}}>
                {/* <FontAwesomeIcon  className="m-2"icon={faFacebookSquare} />
                <FontAwesomeIcon className="m-2" icon={faInstagram} />
                <FontAwesomeIcon className="m-2" icon={faYoutube} />
                <FontAwesomeIcon className="m-2" icon={faWhatsapp} /> */}
                </div>
            </div>
            
        </div>
    )
}
