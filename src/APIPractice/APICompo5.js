import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const APICompo5 = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(data=>setData(data))
.catch(error=>console.log('error occur'))
    },[])
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                 
            </tr>
        </thead>
    <tbody>
        {data.map(item=>(
      <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.body}</td>

</tr>


        ))}
    </tbody>
      </table>
    </div>
  )
}

export default APICompo5
