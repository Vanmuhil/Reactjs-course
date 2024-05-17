import React, { useState } from 'react'

export default function Toogleproject() {
    const[name,setName]=useState(true);
    function changefn() {
        if(name){
            setName(false);   
        }
        else{
            setName(true);
        }
    }
  return (
    <div>
        <h1>{name?"on":"off"}</h1>
        <button onClick={changefn}>Toggle</button>
    </div>
  )
}
