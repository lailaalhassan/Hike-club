import React, { useState } from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Trails from "./Trails";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const TABS = {
  'home': <Home />,
  'about us': <AboutUs />,
  'trails': <Trails />,
  'contact us': <ContactUs />
};

const TAB_NAMES = ['home', 'about us', 'trails', 'contact us'];

function Tabs() {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        {/* Navigation Bar */}
        <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {/* Search Bar */}
        <form className="d-flex ms-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
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