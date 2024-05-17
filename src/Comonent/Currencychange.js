import React, { useState } from 'react'
export default function Currencychange() {
    let a = {
        'inr to inr': 1,
        'usd to usd': 1,
        'riyal to riyal': 1,
        'inr to usd': 0.012,
        'inr to riyal': 0.045,
        'usd to inr': 83.41,
        'usd to riyal': 3.75,
        'riyal to inr': 22.24,
        'riyal to usd': 0.27
    }
    const [curr1, setCurr1] = useState('inr')
    const [curr2, setCurr2] = useState('inr')
    const [inp1, setInp1] = useState('0')
    const [inp2, setInp2] = useState('0')

    return (
        <div>
            <select onChange={(e) => {setCurr1(e.target.value);}}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='riyal'>RIYAL</option>
            </select>
            <input type='number'  value={inp1} onChange={(e) => {
                setInp1(e.target.value);
                setInp2(e.target.value * a[`${curr1} to ${curr2}`])
            }} /><br /><br />
            <select onChange={(e) => {setCurr2(e.target.value);}}>
                <option value='inr'>INR</option>
                <option value='usd'>USD</option>
                <option value='riyal'>RIYAL</option>
            </select>
            <input type='number' value={inp2} onChange={(e) => {
                setInp2(e.target.value);
                setInp1(e.target.value / a[`${curr1} to ${curr2}`])
            }} />
        </div>
    )
}