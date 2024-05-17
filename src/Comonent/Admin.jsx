import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin() {

    const[list,setList]=useState([])

    //insert user
    const[isopen,setIsopen]=useState(false)
    const[username,setUsername]=useState("")
    const[usernumber,setUsernumber]=useState("")
    const[isformopen,setIsformopen]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:3002/students').then(res=>{setList(res.data)}).catch(err=>{console.log(err)})
    },[])

  return (
   <>
    <div>{list.map(x=>(<button>{x.user?.username}</button>))}</div>
    <button onClick={()=>{setIsopen(true)}}>+</button>
    {isopen && <div>
                <button onClick={()=>{setIsopen(false)}}>X</button>
                <form onSubmit={()=>{
                    setIsformopen(true)
                  
                    axios.post('http://localhost:3002/students',{"user":{username:username,usernumber:usernumber}}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
                }}>
                    <label>Name:</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label>Number:</label>
                    <input type="text" value={usernumber} onChange={(e)=>{setUsernumber(e.target.value)}}/>
                    <button type='submit'>Add user</button>
                </form>
            </div> }
            
            </>
            
 
  )
}
