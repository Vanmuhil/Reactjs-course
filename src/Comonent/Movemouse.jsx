import React, { useEffect, useState } from 'react'

export default function Useeffect1() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logPosition=(e)=>{
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logPosition);
        console.log("mouse");
        // return()=>{
        //     window.removeEventListener('mousemove',logPosition);
        // }

    })
  return (

    <div>
        <h1>MoveMouse
            X={x}
            y={y}
        </h1>

    </div>
  )
}
