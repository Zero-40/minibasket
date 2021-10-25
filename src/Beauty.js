import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import b1 from './static-assets/istockphoto-1191964587-170667a.jpg';
import b2 from './static-assets/photo-1519735777090-ec97162dc266.jpg';
import b3 from './static-assets/photo-1601049676869-702ea24cfd58.jpg';
import b4 from './static-assets/istockphoto-1221259449-170667a.jpg';
import b5 from './static-assets/fogg-Extreme-Dynamic.jpg';
import b6 from './static-assets/photo-1612705166160-97d3b2e8e212.jpg';

class Beauty extends React.Component {
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
      <Card.Title >COCONUT OIL</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={b1}  />
    <Card.Footer>
      <small className="text-muted">RS 50</small><br></br>
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
      <Card.Title>SHAMPOO</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={b2} />
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
      <Card.Title>MOISTURIZER</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={b3} />
    <Card.Footer>
      <small className="text-muted">Rs60</small><br></br>
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
      <Card.Title>SANITIZER</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={b4} />
    <Card.Footer>
      <small className="text-muted">RS50</small><br></br>
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
      <Card.Title>FOGG</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={b5} />
    <Card.Footer>
      <small className="text-muted">RS140</small><br></br>
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
      <Card.Title>TOOTH PASTE</Card.Title>
      
    </Card.Body>
    <Card.Img id = "demo" variant="top" width ="280" height = "280" src={b6} />
    <Card.Footer>
      <small className="text-muted">RS40</small><br></br>
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
export default Beauty;