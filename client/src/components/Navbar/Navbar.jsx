import React from "react";
import "./Navbar.css";
// import { Navbar, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";

function Navbar1() {
    return (
        <>
        <div className="container-navbar">
            <NavLink className="nav-item" to="cpu">Cpu</NavLink>
            <NavLink className="nav-item" to="gpu">Gpu</NavLink>
            <NavLink className="nav-item" to="ram">Ram</NavLink>
            <NavLink className="nav-item" to="mainboard">Mainboard</NavLink>
            <NavLink className="nav-item" to="monitor">Monitor</NavLink>
            <NavLink className="nav-item" to="psu">Psu</NavLink>
        </div>
            {/* <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">My Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Nav className="flex-column">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav> */}
        </>
    );
}

export default Navbar1;

// export default 
