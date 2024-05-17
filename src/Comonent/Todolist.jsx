import React, { useState } from 'react'

export default function Todolist() {

  const [items, setItems] = useState("")
  const [list, setList] = useState([])
  const [isopen, setIsopen] = useState(false)
  const handleclk=(id)=>{setList(list.filter(x=>x.id!==id))}
  return (
    <div>
      <input type="text" value={items} onChange={(e) => setItems(e.target.value)} />
      <button onClick={() => { setList([...list,{id:list.length+1,items:items}]); setIsopen(true) }}>add</button>

      {isopen && <div>
        <table>
          <thead>
            <tr>
              <th>s.no</th>
              <th>list</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {list.map(x => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.items}</td>
                <td><button onClick={()=>handleclk(x.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

      {/* (id)=>{setList(list.filter(x.id!==id))} */}
    </div>
  )
}
