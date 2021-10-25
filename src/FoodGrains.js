import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Products.css';
import fg1 from './static-assets/istockphoto-155156716-170667a.jpg';
import fg2 from './static-assets/istockphoto-1273286913-170667a.jpg';
import fg3 from './static-assets/istockphoto-1206682746-170667a.jpg';
import fg4 from './static-assets/photo-1573812461383-e5f8b759d12e.jpeg';
import fg5 from './static-assets/istockphoto-915315364-170667a.jpg';
import fg6 from './static-assets/photo-1625921133217-8d978f7872b8.jpeg';

class FoodGrains extends React.Component {
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
      <Card.Title >RICE</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg1}  />
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
      <Card.Title>ATTA</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg2} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs52</small><br></br>
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
      <Card.Title>OIL</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg3} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs120</small><br></br>
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
      <Card.Title>GHEE</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg4}/>
    <Card.Footer>
      <small className="text-muted">1 KG - Rs600</small><br></br>
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
      <Card.Title>GARAM MASALA</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg5} />
    <Card.Footer>
      <small className="text-muted">100 G - Rs43</small><br></br>
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
      <Card.Title>CHILLI POWDER</Card.Title>
      
    </Card.Body>
    <Card.Img variant="top" width ="280" height = "280" src={fg6} />
    <Card.Footer>
      <small className="text-muted">1 KG - Rs300</small><br></br>
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
export default FoodGrains;