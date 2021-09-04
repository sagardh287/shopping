import React,{useState} from 'react'
import Cardlist from '../component/Cardlist'
import image from '../data/bgimage.jpg'

export default function Main() {
    const [responseData,setResponseData]=useState([1,2,3,4,5,6])
     
    return (
        <div className="container mb-3">
            <div class="row row-cols-2 row-cols-md-5 g-4">
                {/* <Cardlist image={image}/> */}
                {
                    responseData.map((data)=>(
                        <div key={data}>

                            <Cardlist image={image} />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
