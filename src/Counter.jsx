import { useState } from "react"


export default function Counter(){
 
     const [count, setCount] = useState(0)
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleMinus = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border : '2px solid red', padding: '10px'}}>
            <h2>Counter : {count} </h2>
            <button onClick={handleAdd }>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    )
}