import React, { useState } from 'react'

const Update = (Orginal)=>{

    function NewComponent(props){
        const[count,setCount]=useState(0)
        const handleclk=()=>{
            setCount(prev=>prev+1)
        }
        return(<Orginal count={count} handleclk={handleclk}{...props}/>)
    }

  return  NewComponent
  }
  export default Update
