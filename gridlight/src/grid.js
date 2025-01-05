import React from 'react'
import Cell from './Cell'


export default function Grid() {
    const config =[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
  return (
    <div className='wr'>
        <div className='box'>
      {config.flat(1).map((value,index)=>{
        return <div><Cell
        key={index}></Cell>
        {/* <h1>ffg</h1> */}
        </div>
      })}
      </div>
    </div>
  )
}
