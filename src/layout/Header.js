import React from 'react';
import '../assets/css/header.css';



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
      
    <div class="topnav" id="myTopnav">

        <a href="/" class="active">Home</a>

        <a href="/news">News</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href ="/library">library</a>
        

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    </div>
  )
}

export default Header