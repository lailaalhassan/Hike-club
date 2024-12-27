import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const TABS = {
  'home': <Home />,
  'about us': <AboutUs />,
  'contact': <Contact />
};

const TAB_NAMES = ['home', 'about us', 'contact'];

function Tabs() {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className="container">
      <NavBar 
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {/* This is the main content of the page */}
      {TABS[selectedTab]}
    </div>
  );
}

function NavBar({ selectedTab, setSelectedTab }) {
  return (
    <div className="nav nav-tabs">
      {TAB_NAMES.map(tab => (
        <button
          key={tab}
          className={`nav-item nav-link ${selectedTab === tab ? 'active' : ''}`}
          role="presentation"
          onClick={() => setSelectedTab(tab)}
          aria-selected={selectedTab === tab}
          aria-controls={tab}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize tab name */}
        </button>
      ))}
    </div>
  );
}

export default Tabs;