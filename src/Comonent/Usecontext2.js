import React from 'react'
import { password,userName } from './Usecontext'
import { useContext } from 'react'

export default function Usecontext2() {
    const user=useContext(userName);
    const pass=useContext(password);
  return (
    <div>
     <p>  Name:{user}<br/>
        Password:{pass}</p> 

    </div>
  )
}
