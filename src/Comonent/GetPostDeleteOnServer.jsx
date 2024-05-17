import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UseInput from '../Hooks/UseInput';

export default function GetPostDeleteOnServer() {
    // const[name,bindName]=UseInput()

    const [list, setList] = useState([]);
    const [name, setName] = UseInput('');
    const [mark, setMark] = UseInput();
    const [img, setImg] = UseInput('');

    //update state
    const[popup,setPopup]=useState(false);
    const [id1, setId1] = useState('');
    const [name1, setName1] = useState('');
    const [mark1, setMark1] = useState();
    const [img1, setImg1] = useState('');

    //update function
    // const openpopup=()=>{
    //     setPopup(true);
    //     setId1(id);
    //     setName1(name);
    //     setMark1(mark);
    //     setImg1(img);

    // }


    //to read data from server 
    useEffect(() => {
        axios.get("http://localhost:3001/students").then(res => { setList(res.data) }).catch(err => { console.log(err); })
    }, [])

    // //to push data in server
    // const handlesubmit = () => {
    //     axios.post("http://localhost:3002/students", { id: id, name: name, mark: mark, img: img }).then(res => console.log(res)).catch(err => console.log(err))
    // }

    // //to delete a data from server page

    // const handledelete = (id1) => {
    //     axios.delete(`http://localhost:3002/students/${id1}`).then(res => { console.log(res); alert("Data deleted sucessfully") }).catch(err => console.log(err))
    // }



    return (
        <div>
         
            <div className='form1'>            <h1>staff page </h1>
                <form onSubmit={() => {
                    axios.post("http://localhost:3001/students", {  name: name, mark: mark, img: img }).then(res => console.log(res)).catch(err => console.log(err))
                }}>
                    <label>Name:</label>
                    <input type="text" {...setName}  required/><br /><br />
                    <label>Mark:</label>
                    <input type="number"{...setMark} required /><br /><br />
                    <label>img:</label>
                    <input type="text" {...setImg} required/><br /><br />
                    <button type='submit'>add Data</button>
                </form>
            </div>
            <table className='table' border={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mark</th>
                        <th>img</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (<tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.mark}</td>
                        <td><img src={x.img} width={50} height={50} /></td>
                        <td><button onClick={() => {
                            axios.delete(`http://localhost:3001/students/${x.id}`).then(res => { console.log(res);alert("Data deleted sucessfully");window.location.reload()
                             }).catch(err => console.log(err))
                        } }>Delete</button>
                        <button onClick={()=>{ setPopup(true); setId1(x.id); setName1(x.name); setMark1(x.mark); setImg1(x.img);}}>update</button></td>
                    </tr>))}
            </tbody>
        </table>

        {popup && 
           <div>
           
                <div>
                 <form className='form2' onSubmit={()=>{axios.put(`http://localhost:3001/students/${id1}`,{ id: id1, name: name1, mark: mark1, img: img1})}}>
                 <button onClick={()=>{setPopup(false)}}>X</button><br/><br/>
                    <label>Name:</label>
                    <input type="text" value={name1} onChange={(e) => { setName1(e.target.value) }}  required/><br /><br />
                    <label>Mark:</label>
                    <input type="number" value={mark1} onChange={(e) => { setMark1(e.target.value) }} required /><br /><br />
                    <label>img:</label>
                    <input type="text" value={img1} onChange={(e) => { setImg1(e.target.value) }} required /><br /><br />
                    <button type='submit'>add Data</button>
                 </form>
                 </div>
            </div> }

        </div >
    )
}
