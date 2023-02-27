import React from "react"
import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";

// export const HomeComponent = () => {
//     const[color, setColor] = useState("")
//     const [active, setActive] = useState(false);
  
//     const handleClick = () => {
//       setActive(!active);
//     };
  
//     useEffect(()=>{
//         document.body.style.backgroundColor = color
//       }, [color])

//     return (
//       <div className="ChangeBg" onClick={handleClick}
//         style={{ backgroundColor : active ? "" : "" }}>
//          <h1>Welcome to my blog</h1>
//       </div>
//     );
//   }

export const HomeComponent = () => {
  
    return (
    <h1 className="py-3 mt-5 m-auto w-25 text-center bg-info rounded">I am Home</h1>
      )
      
}