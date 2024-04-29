import React from "react";
import './App.css';

const OddEvenFunction = ()=>{

    const [count,setCount]=React.useState(1)
    const  increment = () =>{
        setCount(count+1)
    }
 const   decrement = () =>{
        setCount(count-1)
    }
const evenOrOdd =count % 2 ===0

    return <div className="container">

<h2> count : {count} </h2>

<button onClick={increment}> INCREMENT </button><br />
<button onClick={decrement}> DECREMENT </button><br />
<p>{evenOrOdd ? "EVEN" : "ODD"}</p>
</div>

}

export default OddEvenFunction