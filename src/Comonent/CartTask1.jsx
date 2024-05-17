import React, { useContext } from 'react'
import { product } from './CartTask'

export default function CartTask1() {
    const products=useContext(product)
  return (
    <div>
        <button onClick={()=>{products.display1('inc');products.setIsopen(true)}}>Add Product A</button>
        <button onClick={()=>{products.display2('inc');products.setIsopen1(true)}}>Add Product B</button>

    </div>
  )
}
