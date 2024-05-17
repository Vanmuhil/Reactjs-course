import React from 'react'

export default function Style() {
    let style={
        color:'blue',
        backgroundColor:'black',
        fontSize:'150px'
    }
  return (

    <div>
        <h1 className='primary'>hai</h1>
        <h1 style={style}>welcome</h1>
    </div>
  )
}
