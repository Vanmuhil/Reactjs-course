// import React, { useEffect, useState } from 'react'

// export default function Countdown() {
//     const[count,setCount]=useState(0)
//     const[value,setValue]=useState(0)
//     const[isopen,setIsopen]=useState(false)
//     const[str,setStr]=useState('')

//     useEffect(()=>{
//         let interval;
//         if(isopen){
//             interval=setTimeout(()=>{setCount(prev=>prev-1)},1000);
//             if(count===0)
//             {
//                 setStr("happy birthday!")
//                 clearTimeout(interval)
//             }
//         }
//     },[count,isopen])

//   return (
//     <div>
//         <p>duration in secoands:</p>
//         <input type="number" value={value} onChange={(e)=>{setCount(e.target.value);setValue(e.target.value)}}/>
//         <button onClick={()=>{setIsopen(!isopen);setCount(value)}}>StartTimer</button>
//         {count===0 ? (<h1>{str}</h1>):   (<h1>duration in secoands:{count}</h1>)}

//     </div>
//   )
// }



































//  import React, { useEffect, useState } from 'react'
// // import "../Count.css"

//  export const Countdown = () => {
//      const [count, setCount] = useState();
//      const [value, setValue] = useState();
//      const [start, setStart] = useState(false);
//      const [a, setA] = useState("")
//      const [calwidth, setCalwidth] = useState();

//      useEffect(() => {
//          let interval;
//          if (start) {
//              interval = setTimeout(() => {
//                  setCount(prev => prev - 1)
//              }, 1000)
//              if (count === 0) {
//                  setA("happy birthday")
//                  clearTimeout(interval)
//              }
//          }
//          return () => {
//              clearInterval(interval)
//          }
//      })
//      const progressWidth = (count / value) * 100

//      return (

//          <div>
//              {/* ( <h2>Countdown Timer : {count} Seconds</h2>)} */}

//              {count === 0 ? (<h1>{a}</h1>) : (<div className='loading-bar'>
//                  <div className='loading' style={{ width: progressWidth + '%' }} ></div>
//              </div>)}
//              {start ? (<button onClick={() => { setStart(false) }}>Stop</button>) : (<button onClick={() => { setStart(true) }}>start</button>)}
//              <input type="number" disabled={start} value={value} onChange={(e) => { setCount(e.target.value); setValue(e.target.value) }} />
//              <button onClick={() => { setCount(value) }}>Reset</button>
//          </div>
//      )
//  }


