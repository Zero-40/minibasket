import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'



import { NavLink,Form,FormControl } from "react-bootstrap";
class Header1 extends React.Component {
  render() {
    return (<div className="Row1">
      <Container>
          <Row>

              
        <Navbar bg="dark" variant="dark" expand="lg" class="navbar" className="navbarcss" id='Colorid' >
        <Navbar.Brand href="#" >{''}{''}</Navbar.Brand>
<Col>
  <Navbar.Brand href="/" id = "loginbtn1" ><img src="logo7.jpeg" width="100" height="100" /></Navbar.Brand></Col>
  <Col>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
    
      className="mr-auto my-2 my-lg-0"D
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      
      

      <Nav.Link href="/" id = "maintitle-title">ZERO-40</Nav.Link>
      
     
    </Nav>
    
  
    
    
  </Navbar.Collapse></Col>
  
  <Nav>
      <Col>
       <Nav.Link >{''}{''}</Nav.Link>
       <NavLink><Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search For Products"
          className="me-2"
          aria-label="Search"
          
        /></Form></NavLink></Col>
        <Col>
       <Nav.Link ><i class="fa fa-search" id = "searchbtn" aria-hidden="true"></i></Nav.Link></Col>
       
       <Col><Nav.Link href="/Contactus" id = "loginbtn">Contact Us</Nav.Link></Col>
       <Col><Nav.Link href="/Login" id = "loginbtn">Login/Signup</Nav.Link></Col>
       <Col><Nav.Link href="/Cart" id = "loginbtn" >Cart</Nav.Link></Col>
       
      
      
        
        
      
    </Nav>
</Navbar>
</Row>
</Container>
    </div>
    )
  }
}
export default Header1;