import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNav.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect, useRef } from "react";

export const MyNav = () => {
  
  const [navOpen, setNavOpen] = useState(false);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [y, setY] = useState(0);

  const handleNavigation = (e) => {

    const window = e.currentTarget;

    if (y > window.scrollY || y < window.scrollY) {

      if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

        document.getElementById("responsive-navbar-nav").classList.remove("show");
        document.getElementById("toggle_btn").classList.remove("open");
        setNavOpen(navOpen => !navOpen);

      }

    }

    setY(window.y);

  };

  const handleClickOutside = () => {

    if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

      document.getElementById("responsive-navbar-nav").classList.remove("show");
      document.getElementById("toggle_btn").classList.remove("open")
      setNavOpen(navOpen => !navOpen)

    }

    setY(window.y);

  };

  

  useEffect(() => {

    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");
      document.getElementById("responsive-navbar-nav").classList.remove("collapse");

    }

  }, []);

  const toggleNav = () => {

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");

      if (!navOpen) {

        document.getElementById("toggle_btn").classList.add("open")
        document.getElementById("responsive-navbar-nav").classList.add("show");

      }
      
      else {

        document.getElementById("toggle_btn").classList.remove("open")
        document.getElementById("responsive-navbar-nav").classList.remove("show");

      }

      setNavOpen(navOpen => !navOpen);

    }

  }

  return (

    <div>
      
        <Navbar collapseOnSelect expand = "lg" variant = "dark" className = "myNavbar fixed-top" >

          <Container>

            <Navbar.Brand href = "/rfw-5k-2023/"> <img src = {process.env.PUBLIC_URL + "/assets/hand_logo.png"} alt = "RFW" /> </Navbar.Brand>

            <button className = "navbar-toggler second-button toggleBtn" type = "button" data-toggle = "collapse" data-target = "#responsive-navbar-nav"
              aria-controls = "responsive-navbar-nav" aria-expanded = "false" aria-label = "Toggle navigation" onClick = {toggleNav}>
              <div className = "animated-icon2" id={"toggle_btn"}><span></span><span></span><span></span><span></span></div>
            </button>
            

            <Navbar.Collapse id = "responsive-navbar-nav" className = "navbar-collapse" onClick={handleClickOutside}>

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
