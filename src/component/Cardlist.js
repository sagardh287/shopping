import React from 'react'
import { Link } from 'react-router-dom'

export default function Cardlist({image, name}) {

    return (
    
            <div class="col">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body text-center m-0 p-0">
                        <h5 class="card-title m-0 p-0">{name}</h5>
                        <p class="card-text p-0 m-0">less than 5000rs</p>
                        <p class="card-text m-0 p-0">5%-25% off</p>
                    </div>
                    <div class="card-footer text-center ">
                        <small class="text-muted m-0 p-0">3m ago</small>
                        <Link to={`/product/${3232323}`}>
                        <button className="btn btn-primary ps-3 pe-3 pt-0 pb-1">view</button>
                        </Link>
                    </div>
                </div>
            </div>

    )
}
