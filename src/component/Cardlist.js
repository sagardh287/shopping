import React from 'react'
// import { Link } from 'react-router-dom'
import "./cardliststyle.css"

export default function Cardlist({image, name ,link, price , status}) {

    return (
    
            <div className="col ">
                <div className="card h-100 ">
                    <div className="imgblock" >
                    <img src={image} className="card-img-top img-fluid cardimage" alt="..." />
                    </div>
                    <hr/>
                    <div className="card-body text-center m-0 p-0 border-top">
                        <h5 className="card-title m-0 p-0">{name}</h5>
                        <p className="card-text p-0 m-0 "> {price}</p>
                        <p className="card-text m-0 p-0">5%-25% off</p>
                        <p className="card-text m-0 p-0 fw-bold bg-info">Sold (sell hua)</p>
                    </div>
                    <div className="card-footer text-center ">
                        {/* <small class="text-muted m-0 p-0">3m ago</small> */}
                        {/* <Link to={{pathname:link}} target="_blank"> */}
                        <button className="btn ps-3 pe-3 pt-0 pb-1 btn-primary">Buy</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
    )
}
