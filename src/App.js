import Converter from "./Components/Converter";
import { useState, useEffect } from "react";

import "./App.css";

function App() {



  
  return (
    
    <div className="App">
      <div className="container">
        <div className="hero-section">
          <header className="nav-bar">
            <a>Convertia</a>

            <ul className="menu">
              <li>
                <a href="#about" >About this app</a>
              </li>
              <li>
                <a href="#">Github Link</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1c_-TDrUPQtWRLh0WCqQhpjZDH_zD0YbI/view?usp=sharing" target="_blank">Adobe xD design file</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/walid-bensidiaissa-02a1351b0/" target="_blank">Developer</a>
              </li>
            </ul>
          </header>
          <div className="title-section">
            <h1>Convertia Currency Converter </h1>
            <h2>a resulting product of ESBootcamp challenge </h2>
          </div>
          <Converter
           
          ></Converter>
        </div>

        <div id="about" className="about-section">
          <h1>About the app</h1>
          <p>
            This app is a resulting product of a coding challenge cosist of
            building a currency exchanger
            <br />
            <br />
            
            This app is built using react &amp;   <a href="https://www.exchangerate-api.com/" target="_blank">a currency rates Api</a>  the Rates
            are being called each time a base currency AKA From currency is changed, 
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
