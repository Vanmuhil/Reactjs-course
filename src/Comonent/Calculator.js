import React, { useState } from 'react'

export default function Calculator() {
  

    const[inp,setInp]=useState([])
   
  return (
    <div>
        <div>
        <input type='text' value={inp} onChange={(e)=>{setInp(e.target.value)}}/><br></br>
        <input type='button' value="1" onClick={()=>{setInp(inp+"1")}}/>
        <input type='button' value="2"  onClick={()=>{setInp(inp+"2")}} />
        <input type='button' value="3"  onClick={()=>{setInp(inp+"3")}} />
        <input type='button' value="4"  onClick={()=>{setInp(inp+"4")}} />
        <input type='button' value="5"  onClick={()=>{setInp(inp+"5")}} />
        <input type='button' value="6"  onClick={()=>{setInp(inp+"6")}} />
        <input type='button' value="7"  onClick={()=>{setInp(inp+"7")}} />
        <input type='button' value="8"  onClick={()=>{setInp(inp+"8")}} />
        <input type='button' value="9"  onClick={()=>{setInp(inp+"9")}} />
        <input type='button' value="0"  onClick={()=>{setInp(inp+"0")}} />
        </div>
            <div>
            <input type='button' value="+" onClick={()=>{setInp(inp+"+")}}/>
            <input type='button' value="-" onClick={()=>{setInp(inp+"-")}} />
            <input type='button' value="*" onClick={()=>{setInp(inp+"*")}}/>
            <input type='button' value="/" onClick={()=>{setInp(inp+"/")}}/>
            <input type='button' value="="  onClick={()=>{setInp(eval(inp))}} />
            <input type='button' value="C" onClick={()=>{setInp("")}} />
            <input type='button' value="back" onClick={()=>{setInp(inp.slice(0,inp.length-1))}}/>
            </div>
    
    </div>
  )
    }

