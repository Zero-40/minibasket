import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import sv1 from './static-assets/1.jpeg';
import sv2 from './static-assets/2.jpeg';
import sv3 from './static-assets/3.jpeg';

function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
         
            className="d-block w-100"
            width="700"
            height="700"
            src={sv1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="700"
            height="700"
            src={sv2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="700"
            height="700"
            src={sv3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Slider;