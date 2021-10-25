import React from 'react';
import './App.css';
import Header from './Header'
import Homepage from './Homepage'
import { Route, Switch} from 'react-router-dom'
import Cleaning from "./Cleaning";
import FruitsVegetables from "./FruitsVegetables";
import FoodGrains from "./FoodGrains";
import Beauty from "./Beauty";
import Bakery from "./Bakery";
import Snacks from "./Snacks";
import Login from './Login';
import Cart from './Cart';
import Payment from './Payment';
import Contactus from './Contactus';


function App() {
  return (
    <div className="App">
     <Header/>
    
     
     
     <Switch>
     <Route exact path="/">
     <Homepage/>

        </Route>

        <Route exact path="/FoodGrains">
          <FoodGrains />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        
        <Route exact path="/Beauty">
          <Beauty />
        </Route>
        <Route exact path="/Cleaning">
          <Cleaning />
        </Route>
        <Route  exact path="/FruitsVegetables">
          <FruitsVegetables />
        </Route>
        <Route exact path="/Bakery">
          <Bakery />
        </Route>
        <Route exact path="/Snacks">
          <Snacks />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Payment">
          <Payment/>
        </Route>
        <Route exact path="/Contactus">
          <Contactus/>
        </Route>
        
        
      </Switch>
     
    </div>
  );
}

export default App;
