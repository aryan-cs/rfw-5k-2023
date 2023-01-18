import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNav.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect } from "react";

export const MyNav = () => {
    const [y, setY] = useState(0);

    // if user scrolls then nav dropdown collapses
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY || y < window.scrollY) {
        if(window.innerWidth<=991){
            document.getElementById('responsive-navbar-nav').classList.add("collapsing")
            document.getElementById('toggle_btn').classList.add("collapsed")
        }
        // console.log(document.getElementById('toggle_btn'))
    }
    setY(window.y)
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));

  }, []);


  return (

    <div>
      
        <Navbar collapseOnSelect expand = "lg" variant = "dark" className = "myNavbar fixed-top" >

          <Container>

            <Navbar.Brand href = "/rfw-5k-2023/"> <img src = {process.env.PUBLIC_URL + "/assets/hand_logo.png"} alt = "RFW" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls = "responsive-navbar-nav" className = "toggleBtn" id="toggle_btn"/>

            <Navbar.Collapse id = "responsive-navbar-nav" className = "navbar-collapse">

              <Nav className = "me-auto" />

              <Nav className = "links">

                <Nav.Link href = "/rfw-5k-2023" className = "navItem">Home</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/about" className = "navItem">About</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/impact" className = "navItem">Impact</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/team" className = "navItem">Team</Nav.Link>
                <Nav.Link href = "/rfw-5k-2023/contribute" className = "navItem">Contribute</Nav.Link>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>   

    </div>

  )

}
