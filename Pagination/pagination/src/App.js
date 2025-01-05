import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const fetched =async()=>{
    const response =await fetch(`https://dummyjson.com/products?limit=100`)
    const val =await response.json();
    console.log(val);
    console.log(response);
if(val && val.products){
  setData(val.products);
}
  }
    useEffect(()=>{
    fetched()
  },[])
  return (
    <div>
      <h1>hello React </h1>
      {
        data.slice(page*10-10,page*10).map((value,index)=>{
          return <span className='img'><img src={value.thumbnail} alt={value.title}></img>
          <span>
              {value.title}
            </span></span>
        })
      }
     {data.length > 0 && (
  <div>
    <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>Prev</button>
    {Array.from({ length: 10 }, (_, i) => (
      <span key={i}><button onClick={()=>setPage(page * 10 + i + 1)}>{page * 10 + i + 1}</button></span>
    ))}
    <button
      onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(data.length / 10) - 1))}
    >
      Next
    </button>
  </div>
)}

    </div>
  )
}
