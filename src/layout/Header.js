import React from 'react';
import '../assets/css/header.css';
import About from './../view/About';
import Contact from "./../view/Contact";
import Home from "./../view/Home";
import Library from "./../view/Library";
import News from "./../view/News";

import { Switch, Route, Link } from "react-router-dom";




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



 const Header = () => {
   return (
  <div>
       <div>
       
       </div>
      
    <div className="topnav" id="myTopnav">

      
         <Link to="/" className="active">Home</Link> 
        <Link to="/about">О нас</Link>
        <Link to="/contact">Контакты</Link>
        <Link to="/library">Библиотека</Link>
        <Link to="/News">Новости</Link> 
        



<Switch>   
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/library" component={Library} />
          <Route path="/News" component={News} />
 </Switch>
        

        {/* <link to="javascript:void(0);" className="svg" onClick="myFunction()">
            <i className="fa fa-bars"></i>
        </link> */}
    </div>
    </div>
  )
}


export default Header