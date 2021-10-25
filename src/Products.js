import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import {Link} from 'react-router-dom'
import p1 from './static-assets/PngItem_464142.png';
import p2 from './static-assets/WhatsApp Image 2021-10-21 at 7.12.08 PM.jpeg';
import p3 from './static-assets/WhatsApp Image 2021-10-21 at 7.13.44 PM.jpeg';
import p4 from './static-assets/WhatsApp Image 2021-10-21 at 7.15.36 PM.jpeg';
import p5 from './static-assets/WhatsApp Image 2021-10-21 at 7.20.09 PM.jpeg';
import p6 from './static-assets/WhatsApp Image 2021-10-21 at 7.26.25 PM.jpeg';

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
    <Card.Img variant="top" className="img" width ="280" height = "280" src={p1}  />
    
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
    <Card.Img variant="top" width ="280" height = "280" src={p2 }/>
    
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
    <Card.Img variant="top" width ="280" height = "280" src={p3} />
    
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
    <Card.Img variant="top" width ="280" height = "280" src={p4} />
    
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
    <Card.Img variant="top" width ="280" height = "280" src={p5} />
    
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
    <Card.Img variant="top" width ="280" height = "280" src={p6} />
    
  </Card></Link></Card>
</CardGroup>


     </div>
    );
  }
}
export default Products;