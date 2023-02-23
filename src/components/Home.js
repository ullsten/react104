import React from "react"
import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";

export const HomeComponent = () => {
    const[color, setColor] = useState("")
    const [active, setActive] = useState(false);
  
    const handleClick = () => {
      setActive(!active);
    };
  
    useEffect(()=>{
        document.body.style.backgroundColor = color
      }, [color])

    return (
      <div className="ChangeBg" onClick={handleClick}
        style={{ backgroundColor : active ? "green" : "white" }}>
         <h1>Welcome to my blog</h1>
      </div>
    );
  }
  

