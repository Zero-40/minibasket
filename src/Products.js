import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import {Link} from 'react-router-dom'

class Products extends React.Component {
  render() {
    return (
        <div className="Mainbody"  id ="Mainid"> 
        <CardGroup >
        <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'2px'
  }}>
  <Link to="/FruitsVegetables"><Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body >
      <Card.Title className="myButton" >FRUITS & VEGETABLES</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" className="img" width ="280" height = "280" src="PngItem_464142.png"  />
    
  </Card></Link></Card>
  
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Link to="/FoodGrains"><Card className="style" style={{
    padding : '30px 30px 30px',
    
  }}><Card.Body>
      <Card.Title className="myButton">FOODGRAINS , OIL & MASALA</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.12.08 PM.jpeg" />
    
  </Card></Link></Card>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Link to="/Snacks"><Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title className="myButton">SNACKS & BEVERAGES</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.13.44 PM.jpeg" />
    
  </Card></Link></Card>
</CardGroup>
<CardGroup>
        <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Link to="/Beauty"><Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title className="myButton">BEAUTY & HYGIENE</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.15.36 PM.jpeg" />
    
  </Card></Link></Card>
  
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Link to="/Cleaning"><Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title className="myButton">CLEANING & HOUSEHOLD</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.20.09 PM.jpeg" />
    
  </Card></Link></Card>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Link to="/Bakery"><Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title className="myButton">BAKERY & DAIRY</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.26.25 PM.jpeg" />
    
  </Card></Link></Card>
</CardGroup>


     </div>
    );
  }
}
export default Products;