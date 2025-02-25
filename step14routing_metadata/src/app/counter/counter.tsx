"use client";
import { useState } from "react";
export default function CounterPage(){
    const[count,setCounter]=useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={()=> setCounter(count+1)}>Increament</button>
        </div>
    )
}