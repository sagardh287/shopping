import React,{useEffect, useState} from 'react'
import product from '../data/Array/Productdata'
import Cardlist from '../component/Cardlist'
export default function Main() {
    const [responseData,setResponseData]=useState([])
    console.log({product})

    useEffect(()=>{
        setResponseData(product)
    },[])
    return (
        <div className="container bg-dark bgset mt-4">
            <div class="row row-cols-2 row-cols-md-5 g-4 pb-3 pt-1 border-top">
                {
                    responseData.map((data)=>(
                        <div key={data.id}>
                            <Cardlist image={data.image} name={data.name} link={data.Link} price={data.price}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
