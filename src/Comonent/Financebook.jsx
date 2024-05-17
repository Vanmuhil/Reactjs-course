import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Financebook1 from './Financebook1'


export default function Financebook() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [area, setArea] = useState('')
    const [amountneed, setAmountneed] = useState('')
    const[list,setList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/students').then(res=>setList(res.data)).catch(err=>console.log(err))
    })
    

    return (
        <div>
            <form onSubmit={()=>{
                 axios.post("http://localhost:3001/students", {  name,email,area,amountneed }).then(res => console.log(res)).catch(err => console.log(err))
            }}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} required /><br /><br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required /><br /><br />
                <label>Area:</label>
                <input type="text" value={area} onChange={(e) => { setArea(e.target.value) }} required /><br /><br />
                <label>Amount:</label>
                <input type="text" value={amountneed} onChange={(e) => { setAmountneed(e.target.value) }} required /><br /><br />
                <button>Send Request</button>
            </form>
            <Financebook1 list={list}/>
            
        </div>
    )
}
