import React from 'react'
import { Link } from 'react-router-dom'

export default function Cardlist({image , name , price , off}) {

    return (
    
            <div class="col">
                <div class="card h-100">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">price : {price}</p>
                        <p class="card-text">{off} Off</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <Link to={`/product/${3232323}`}>
                        <button className="btn btn-primary">view</button>
                        </Link>
                    </div>
                </div>
            </div>

    )
}
