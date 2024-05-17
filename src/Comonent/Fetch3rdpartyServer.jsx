import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Fetch3rdpartyServer() {

    const [list,setList]=useState([]);
    const [id,setId]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:3002/students?${id}`).then(res=>{setList(res.data)}).catch(err=>{console.log(err);})    
    })

  return (
 
    <div>

        {list.map(x=>(<div>
            <p>mark:{x.mark}</p> 
            <p>class:{x.class}</p>
            </div>
        ))}
    </div>
  )
}
