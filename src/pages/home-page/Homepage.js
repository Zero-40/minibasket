import React from "react";

import Deals from "./Deals";
import Products from './Products'
import Slider from "../../components/slider-component/Slider";
import Timer from "./Timer"
import App12 from './demo/App12';

function Homepage() {
    return (
      <div className="App">
        <br/>
        <Deals/>
        <Timer/>
       <Slider/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <Products/><br/><br/><br/>
       
      
       <App12/>
       
       
      </div>
    );
  }
export default Homepage;