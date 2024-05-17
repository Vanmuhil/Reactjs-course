
import React from 'react'

export default function Financebook1(props) {

    const {list} =props
  return (
    <div>
        <table className='table' border={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Area</th>
                        <th>Amount Asked</th>
                    </tr>
                </thead>
                <tbody>
                  

                    {list.map((x)=>(
                       <tr key={x.id}>
                        <td>{x.id}</td>
                       <td>{x.name}</td>
                       <td>{x.email}</td>
                       <td>{x.area}</td>
                       <td>{x.amountneed}</td>
                   </tr>
                    ))}

                    </tbody>
                    </table>

    </div>
  )
}
