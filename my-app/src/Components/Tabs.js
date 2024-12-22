import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";

const TABS = {
    'home': <Home />,
    'about us': <AboutUs />,
    'contact': <Contact />
  }


 
 function Tabs () {
  
    const [selectedTab, setSelectedTab] = useState('home');
  
    return(
        <div className= "container">
      
       <NavBar 
          setSelectedTab={setSelectedTab}
        />
        {/* this is the main content of the page */}
        {TABS[selectedTab]}
      </div>
    ) 
    
    function NavBar({setSelectedTab}) {

        return( 
    
        
        <div className="nav nav-tabs">
        <button className="nav-item"  role="presentation" onClick={() => setSelectedTab('home')}>Home</button>
        <button className="nav-item"  role="presentation" onClick={() => setSelectedTab('about us')}>About Us</button>
        <button className="nav-item"  role="presentation" onClick={() => setSelectedTab('contact')}>Contact</button>
      </div>)
     }
  }
    
    export default Tabs;
    