import React,{useEffect, useState} from 'react'
import Cardlist from '../component/Cardlist'
import image from '../data/bgimage.jpg'

export default function Main() {
    const [responseData,setResponseData]=useState([])
    

    useEffect(()=>{
        setResponseData([{
            id:"1",
            name:"sagar"
        }
        ,{
            id:"2",
           name:"sagar"
       },
       {
           id:"3",
           name:"sagar"
       },
       {
           id:"4",
           name:"sagar"
       },
       {
        id:"5",
        name:"sagar"
    }
    ])
    },[])
    return (
        <div className="container mb-3">
            <div class="row row-cols-2 row-cols-md-5 g-4">
                {/* <Cardlist image={image}/> */}
                {
                    responseData.map((data)=>(
                        <div key={data.id}>
                            <Cardlist image={image} />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
