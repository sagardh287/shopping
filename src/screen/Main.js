import React,{useEffect, useState} from 'react'
import Cardlist from '../component/Cardlist'
import image1 from '../data/selldata/iphone.jpg'
import image3 from '../data/selldata/trimmer.jpg'
import image2 from '../data/selldata/bracelet1.jpg'
import image6 from '../data/selldata/bracelet.jpg'
import image5 from '../data/selldata/soundbox1.jpg'
import image4 from '../data/selldata/soundbox.jpeg'

export default function Main() {
    const [responseData,setResponseData]=useState([])
    

    useEffect(()=>{
        setResponseData([{
            id:"1",
            name:"iPhone",
            image:image1
        }
        ,{
            id:"2",
           name:"bracelet",
           image:image2
       },
       {
           id:"3",
           name:"trimmer",
           image:image3
       },
       {
           id:"4",
           name:"soundbox1",
            image:image4
       },
       {
        id:"5",
        name:"soundbox1",
        image:image5
    },
    {
     id:"6",
     name:"bracelet",
     image:image6
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
                            <Cardlist image={data.image} name={data.name}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
