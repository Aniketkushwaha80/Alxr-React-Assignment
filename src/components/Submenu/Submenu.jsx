import React, { useState } from "react";
import "./Submenu.css";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink, Link, useLocation } from "react-router-dom";

const Submenu = (prop) => {
  const [open, setopen] = useState(false);
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item "}>
      <div
        className="sidebar-title"
        onClick={() => {
          setopen(!open);
        }}
      >
      
        <span style={{fontWeight:"600",fontSize:"14px"}}>500 ML
        
        
        </span>  <AiOutlineRight style={{fontWeight:"600",fontSize:"13px"}} className="first-item toggle-btn" />
      </div>
      <div className="sidebar-content">
        
         
            
              <p className="sub-menu-title">250 ML</p>
               <p className="sub-menu-title">1 LTR</p>
           
      
     
      </div>
    </div>
  );
};

export default Submenu;
