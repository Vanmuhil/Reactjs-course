import React, { useState } from 'react'

export default function FormHandling() {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');

  return (
    <div>
        <input type='text' value={name} placeholder='Enter the Name' onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
        <input type='text' value={age} placeholder='Enter the age' onChange={(e)=>{setAge(e.target.value)}} /><br/><br/>
        <button onClick={()=>{console.log(name,age);}}>click</button>
    </div>
  )
}