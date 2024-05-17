import React from 'react'
import ListRenderProps from './ListRenderProps'

export default function ListRendering() {
  const  list=[{
        id:'1',
        name:'vanmuhil',
        mark:'100'
    },
    {  id:'1',
    name:'vanmuhil',
    mark:'100'},
    {  id:'1',
    name:'vanmuhil',
    mark:'100'
}
]
  return (
    <div>
        {/* {list.map((x)=>(<h1>{x.id} {x.name } {x.mark}</h1>
      ))} */}
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Mark</th>
            </tr>
        </thead>
        <tbody>
            
                <ListRenderProps list={list} />
            
        </tbody>
      </table>
       
    </div>
  )
}
