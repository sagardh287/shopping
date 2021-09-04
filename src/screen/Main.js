import React,{ useState} from 'react'
import Cardlist from '../component/Cardlist'
import image from '../data/bgimage.jpg'
// import axios from 'axios'

export default function Main() {
    const [responseData,setResponseData]=useState(["1","2","3","4","5","6"])
    // const getdata=async ()=>{
    //     await axios.get("/product").then((response)=>{
    //         setResponseData(response.data)
    //     })
    //  }
    //  useEffect(() => {
    //      getdata();
    //  },[])
     
    return (
        <div className="container mb-3">
            <div class="row row-cols-2 row-cols-md-5 g-4">
                {
                    responseData.map((data)=>(
                        <Cardlist image={image} name="lenovo"/>
                    ))
                }
                {
                    responseData.map((data)=>(
                        <Cardlist image={image} name="lenovo"/>
                    ))
                }
            </div>
        </div>
    )
}
