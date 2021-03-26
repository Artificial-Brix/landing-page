import React from 'react';
import './MainHeader.css';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider'

const MainHeader = () => {
  return (
    <div className="main_header">
      <NavBar /> 
      <Slider /> 
      <h1 className="main_header_heading">
        Find the <br/>
        Better Future With <br/>
        Artificial Intelligence 
      </h1>
      
    </div>
  );
};

export default MainHeader;