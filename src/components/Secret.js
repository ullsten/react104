import React, {useState} from "react"
import { Container, Modal, Button } from "react-bootstrap"

const myKey = "oskar"

export const SecretComponent = () => {
    let keyInput = ""
    
    
    document.addEventListener("keydown", (key)=>{
        keyInput += key.key
        if(myKey === keyInput){
            alert("Good! You found me!")
        }
        else{
            setTimeout(()=>{
                keyInput=""
            },2000)
        };
    });
    return(
        <div></div>
       
    )
};