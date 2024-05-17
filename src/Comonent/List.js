import React, { useState } from 'react'

export default function List() {
     
    const[id,setId]=useState();
    const[name,setName]=useState('');
    const[job,setJob]=useState('sel');
    const[list,setList]=useState([]);

  return (
    <div>

        <h1>Add Employee</h1>
        <label>Emp Id:</label>
        <input type='number' value={id} onChange={(e)=>{
            setId(e.target.value);
        }}/>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <label>Job</label>
        <select onChange={(e)=>{
            setJob(e.target.value);
        }}>
            <option value='sel'>Select Job</option>
            <option value='Front End Developer'>Front End Dev</option>
            <option value='Back End Developer'>Back end Dev</option>
            <option value='Testing'>Testing</option>
        </select>
        <button onClick={()=>{
            setList([...list,{id:id,name:name,job:job}])
        }} >Add Employee</button>
        <table>
        <thead>
            <tr>
                <th>E:id</th>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
        </table> 
       {list.map((x)=>(
        <tbody>
            <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.job}</td>
            </tr>
        </tbody>
       ))} 
    </div>
  )
}
