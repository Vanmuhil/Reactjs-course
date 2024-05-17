import React, { useCallback, useState } from 'react'
import Usecontext1 from './Usecontext1'
import UsecallbackB from './UsecallbackB'
import UsecallbackA from './UsecallbackA'

export default function Usecallback() {
    const[age,setAge]=useState(20)
    const[salary,setSalary]=useState(20000)
    const handleAge=useCallback(()=>{setAge(age+1)},[age])
    const handleSalary=useCallback(()=>{setSalary(salary+1000)},[salary])

  return (
    <div>
        <UsecallbackA name="age" display={age}/>
        <UsecallbackB name="age" handleClick={handleAge}/>
        <UsecallbackA name="salary" display={salary}/>
        <UsecallbackB name="salary" handleClick={handleSalary}/>
    </div>
  )
}
