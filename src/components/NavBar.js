import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'


export function ChangeBg () {
  const [active, setActive] = useState(false);
  const[color, setColor] = useState("")

  const handleClick = color => {setColor(color)}
 

  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])

  return (

      <button className="rounded bg-dark text-light border-0" onClick={()=> handleClick("slategray")}>Change color</button>
      
  )
}

export const NavbarComponent = () => {
    return (
        <Navbar display="flex"  bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
          <Navbar.Brand>Oskar Ullsten</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">Cv</Nav.Link>
              <Nav.Link as={NavLink} to="/jsontest">Json</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}