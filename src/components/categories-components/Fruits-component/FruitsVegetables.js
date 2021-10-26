import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import fv1 from './static-assets/WhatsApp Image 2021-10-21 at 7.54.19 PM.jpeg';
import fv2 from './static-assets/WhatsApp Image 2021-10-21 at 7.56.57 PM.jpeg';
import fv3 from './static-assets/WhatsApp Image 2021-10-21 at 7.58.36 PM.jpeg';
import fv4 from './static-assets/wp2722987.jpg';
import fv5 from './static-assets/WhatsApp Image 2021-10-21 at 8.00.38 PM.jpeg';
import fv6 from './static-assets/1201767.jpg';

class FruitsVegetables extends React.Component {
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
      <Card.Title id="demotext1" >TOMATO</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fv1}  />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs45</small><br></br>
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
      <Card.Title>POTATO</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fv2} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs30</small><br></br>
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
      <Card.Title>CARROT</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fv3} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs80</small><br></br>
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
      <Card.Title>APPLE</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fv4} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs120</small><br></br>
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
      <Card.Title>BANANA</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fv5} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs60</small><br></br>
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
      <Card.Title>MANGO</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280"  src={fv6} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs100</small><br></br>
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
export default FruitsVegetables;