import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
class Cleaning extends React.Component {
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
      <Card.Title >VIM</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="vim-liquid-dish-wash-500x500.png"  />
    <Card.Footer>
      <small className="text-muted">RS120</small><br></br>
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
      <Card.Title>COMFORT</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="40184752-2_4-comfort-perfume-deluxe-royale-fabric-conditioner.jpg" />
    <Card.Footer>
      <small className="text-muted">RS95</small><br></br>
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
      <Card.Title>LIZOL</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="61pY++N4XFL._SL1000_.jpg" />
    <Card.Footer>
      <small className="text-muted">RS130</small><br></br>
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
  <Card  className="style" style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>HARPIC</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="61z8h3l3DvL._SL1000_.jpg" />
    <Card.Footer>
      <small className="text-muted">RS140</small><br></br>
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
      <Card.Title>SCRUB</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="scrub-pad-500x500.jpg" />
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
      <Card.Title>MOP</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src="floor-cleaning-mop-500x500.jpeg" />
    <Card.Footer>
      
      <small className="text-muted">RS200</small><br></br>
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
export default Cleaning;
