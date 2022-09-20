
import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount]= useState(0)
    
    return (
        <>
        <h2>Counter: {count}</h2>
       
            <button className="btn btn-dark" style={{marginRight:2}} onClick={(e) => setCount(count+1)}>+</button>
  
            <button className="btn btn-dark" onClick={(e) => setCount(count-1)}>-</button>
        </>
    )
}

export default Counter;