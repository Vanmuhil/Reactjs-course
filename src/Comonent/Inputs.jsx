import React, { useState } from 'react'

export default function Inputs() {

    const[inp,setInp]=useState("");
    const[area,setArea]=useState("");
    const[opt,setOpt]=useState("")
    const[isopen,setIsopen]=useState(false)

  return (
    <div>
        <form>
        <input type='text' value={inp} onChange={(e)=>{setInp(e.target.value)}}/>
        <textarea value={area} onChange={(e)=>{setArea(e.target.value)}}></textarea>
        <select onChange={(e)=>{setOpt(e.target.value)}}>
            <option value="">select an option</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
        </select>
        <button onClick={(e)=>{setIsopen(true);e.preventDefault()}}>submit</button>
        </form>
        {isopen && <div> <p>Input:{inp}<br/>
                            area:{area}<br/>
                            option:{opt}</p> </div>}
    </div>
  )
}
