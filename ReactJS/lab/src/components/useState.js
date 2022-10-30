import React, { useState } from 'react'

export const Demo = () => {
    const [count,setCount]=useState("a");

    // const handleClick=()=>{
    //     setCount(count="a" + count);
    // }
  return (
<div>
<h2>text is :{count}</h2>
<input
        type="text"
        size="20"
        value={count}
        onChange={(e) => setCount(e.target.value)}/>
{/* <button onClick={handleClick}>Click me</button> */}
</div>
  )
}
export default Demo
