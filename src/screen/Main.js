import React from 'react'
import Cardlist from '../component/Cardlist'
import image from "../data/bgimage.jpg"

export default function Main() {
     
    return (
        <div className="container mb-3">
            <div class="row row-cols-2 row-cols-md-5 g-4">
               <Cardlist image={image}/>
            </div>
        </div>
    )
}
