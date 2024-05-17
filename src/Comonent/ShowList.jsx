import React, { useState } from 'react'

const ShowList = () => {
    const [form,setForm] = useState(false);
    const [form1,setForm1] = useState(false);
    const [name,setName] = useState("")
    const [id,setId] = useState()
    const [list,setList] = useState([])
    const handleEmployee = ()=>{
        setList([...list,{id:id,name:name}]) ;
             setName("")  ;
             setId("");
    }

    console.log(0 && false);
  return (
    <div>
        <button onClick={()=>{setForm(form ? false : true)}}>Show Form</button>
        <button onClick={()=>{setForm1(form1 ? false : true)}}>Show List</button>

      {form && (  <div>
            <form action="">
                <input onChange={(e)=>setId(e.target.value)} type="number" value={id} name='id' placeholder='id' />
                <br />
                <input  onChange={(e)=>setName(e.target.value)} type="text" value={name} name='name' placeholder='name'/>
                <br />
                <input onClick={handleEmployee} type="button" value={"Add Employee"} />
            </form>
        </div>)
}
{ form1 && (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x=>(<tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                    </tr>))}
                </tbody>
            </table>
           
        </div>
)
}
    </div>
  )
}

export default ShowList