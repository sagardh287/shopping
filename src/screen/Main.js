// import React,{useEffect, useState} from 'react'
// import Cardlist from '../component/Cardlist'
// import image from '../data/bgimage.jpg'
// import axios from 'axios'

// export default function Main() {
//     const [responseData,setResponseData]=useState([])
//     const getdata=async ()=>{
//         await axios.get("/product").then((response)=>{
//             setResponseData(response.data)
//         })
//      }
//      useEffect(() => {
//          getdata();
//      },[])
     
//     return (
//         <div className="container mb-3">
//             <div class="row row-cols-2 row-cols-md-5 g-4">
//                 {
//                     responseData.map((data)=>(
//                         <Cardlist image={image} name={data.name}/>
//                     ))
//                 }
//                 {
//                     responseData.map((data)=>(
//                         <Cardlist image={image} name={data.name}/>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
