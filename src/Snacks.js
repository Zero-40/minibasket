import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
class Snacks extends React.Component {
  render() {
    return (
        <div className="Mainbody" id ="Mainid"> 
        <CardGroup>
        <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title >LAYS</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 8.24.48 PM.jpeg"  />
    <Card.Footer>
      <small className="text-muted">Rs30</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    
  }}><Card.Body>
      <Card.Title>DARK FANTASY</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 8.27.28 PM.jpeg" />
    <Card.Footer>
      <small className="text-muted">Rs30</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>KITKAT</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 8.31.00 PM.jpeg" />
    <Card.Footer>
      <small className="text-muted">Rs25</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
</CardGroup>
<CardGroup>
        <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>CADBURY</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 8.34.20 PM.jpeg" />
    <Card.Footer>
      <small className="text-muted">Rs80</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>OATS</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="wp4668613.jpg" />
    <Card.Footer>
      <small className="text-muted">Rs40</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>COCO-COLA</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WMgdyje.jpg" />
    <Card.Footer>
      <small className="text-muted">Rs30</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>  
    
  </Card></Card>
</CardGroup>


     </div>
    );
  }
}
export default Snacks;