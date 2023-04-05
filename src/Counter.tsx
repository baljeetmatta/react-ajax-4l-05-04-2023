import React, { useState } from 'react';
const Counter=()=>
{
    const clickHandler=()=>{
        setCount(counter+1);
    }
   // console.log(useState(0));
   const [counter,setCount]=useState(0);

return (
    <>
    
    <p>{counter}</p>
    <button onClick={clickHandler}>+</button>
    </>
)
}
export default Counter;