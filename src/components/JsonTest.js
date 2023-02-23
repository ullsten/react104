import React from "react"
import { Container } from "react-bootstrap"
import {useState, useEffect} from 'react'


export const GetJson = () => {
  const [error, setError] = useState(null)
  const[isloaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3000/react104/data.json')
      .then(res => res.json())
      .then(
          (result)=>{
              setIsLoaded(true)
              setItems(result)
              console.log(result)
          },
          (error) =>{
              setIsLoaded(true)
              setError(error)
          }
      )
  },[])
  if(error){
      return <div>Error: {error.message}</div>
  }
  else if(!isloaded){
      return <div>Loading ...</div>
  }
  else{
      return(
              <div className="container">
                <div className="row bg-danger">
                    <div className="col">
                    <h2 className="bg-info rounded d-inline-block py-1 px-2">Start</h2>
                {items && items.start.map(item=>(
                    <div key={item.id}>
                       <ul>
                         <li>
                        {item.startlinjen} {item.svårighet} {item.startdatum}
                        </li>
                       </ul>
                        </div>
                ))}
                </div>
                
                <div className="col bg-warning">
                    <h2>Slut</h2>
                {items && items.slut.map(item=>(
                    <div key={item.id}>
                        <li>
                        {item.slutlinjen}
                        </li>
                        </div>
                ))}
                </div>
                </div>
                

              </div>
      )}
}