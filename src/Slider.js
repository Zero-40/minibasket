import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
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
            src="1.jpeg"
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
            src="2.jpeg"
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
            src="3.jpeg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Slider;