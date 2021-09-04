import React from 'react'
import { Link } from 'react-router-dom'

export default function Cardlist({image, name}) {

    return (
    
            <div class="col">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">price : 500rs</p>
                        <p class="card-text">"off" 25%</p>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <Link to={`/product/${3232323}`}>
                        <button className="btn btn-primary ps-3 pe-3 pt-0 pb-1">view</button>
                        </Link>
                    </div>
                </div>
            </div>

    )
}
