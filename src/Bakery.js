import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';

class Bakery extends React.Component {
 
  render() {
    return (
        <div className="Mainbody" id ="Mainid"> 
        <CardGroup>
        <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title >BREAD</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280"  src="photo-1598373182308-3270495d2f58.jpg"  />
    <Card.Footer>
      <small className="text-muted">RS60</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button  className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    
  }}><Card.Body>
      <Card.Title>BUN</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="photo-1592811773343-9abf0b1a6920.jpg" />
    <Card.Footer>
      <small className="text-muted">RS30</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>MILK</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="istockphoto-1243439079-170667a.jpg" />
    <Card.Footer>
      <small className="text-muted">RS30</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
</CardGroup>
<CardGroup>
        <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>CURD</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.42.24 PM.jpeg" />
    <Card.Footer>
      <small className="text-muted">RS25</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>CHEESE</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="WhatsApp Image 2021-10-21 at 7.44.36 PM.jpeg" />
    <Card.Footer>
      <small className="text-muted">RS150</small><br></br>
      <div className="CartContainer">
      <small class="counter1"><div class="btn">+</div>{''}{''}
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div><div className="btn6"><button className="btn7">Add</button></div></small>
              </div>
    </Card.Footer>
    
  </Card></Card>
  <Card className="style" style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card className="style" style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>PANEER</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="download.jpeg" />
    <Card.Footer>
      <small className="text-muted">RS160</small><br></br>
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
export default Bakery;