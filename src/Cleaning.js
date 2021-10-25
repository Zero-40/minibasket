import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import c1 from './static-assets/vim-liquid-dish-wash-500x500.png';
import c2 from './static-assets/40184752-2_4-comfort-perfume-deluxe-royale-fabric-conditioner.jpg';
import c3 from './static-assets/61pY++N4XFL._SL1000_.jpg';
import c4 from './static-assets/61z8h3l3DvL._SL1000_.jpg';
import c5 from './static-assets/scrub-pad-500x500.jpg';
import c6 from './static-assets/floor-cleaning-mop-500x500.jpeg';

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
    <Card.Img variant="top" width ="280" height = "280" src={c1}  />
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
    <Card.Img variant="top" width ="280" height = "280" src={c2} />
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
    <Card.Img variant="top" width ="280" height = "280" src={c3} />
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
    <Card.Img variant="top" width ="280" height = "280" src={c4} />
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
    <Card.Img variant="top" width ="280" height = "280" src={c5} />
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
    <Card.Img variant="top" width ="280" height = "280" src={c6} />
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
