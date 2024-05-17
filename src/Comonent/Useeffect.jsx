import React, { useState } from 'react'
import { useEffect } from 'react';
import Movemouse from './Movemouse'


export default function Useeffect() {
                            const[jose,setJose]=useState(false);
    // counter
        //     const[count,setCount]=useState(0);
        //     useEffect( ()=>{
        //    const a=  setTimeout(()=>{
        //             setCount(prev=>prev+1)
        //         },1000)
        //         return ()=>{
        //             clearTimeout(a)
        //         }
        //     })

        // Stop Watch
                    //         const[count,setCount]=useState(0);
                    //         const[intervalId,setIntervalId]=useState(0);
                    //         useEffect(()=>{
                    //             const a = setInterval(()=>{
                    //                 setCount(prev=>prev+1)
                                    
                    //             },500);
                    //             setIntervalId(a)
                    //             return()=>{
                    //                 clearInterval(intervalId)
                    //             }
                    //         },[])



                    // happy birthday
                            const[time,setTime]=useState(new Date())
                            const[va,setVa]=useState('')
                            useEffect(()=>{
                                const interval = setInterval(()=>{
                                    setTime(new Date())
                                    
                                },1000)
                                return ()=>{
                                    clearInterval(interval)}
                                },[])
                                useEffect(()=>{
                                    const timeStr = time.toLocaleTimeString()
                                    if(timeStr==="12:56:00 PM"){
                                        setVa('Happy Brithday')
                                    }
                                })

            // task stopwatch

            
                    
return (
     <div> 






        {/*  happy birthday
        <h1>Current Time{time.toLocaleTimeString()}</h1>
        <h3>{va}</h3>*/}

        {/* stopwatch 
       count-{count}
      <button onClick={()=>{ clearInterval(intervalId)}}>Stop</button>*/}
        {/* counter 
        {count}*/}

        {/* MoveMouse
        <button onClick={()=>{setJose(!jose)}}>jose</button>
        {jose && <Movemouse/>} */}
    </div>
  )
}
