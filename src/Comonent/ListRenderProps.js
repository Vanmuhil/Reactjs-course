import React from 'react'

export default function ListRenderProps(props) {
    let {list}=props;
    
  return (
        <>
            {list.map(x=>(<>
                <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.mark}</td>
                </tr>
                </>))}
        </>
  )
}
