import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category/Category";

const Header = () => {
  return (
   <Link to="/" ><div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1lEUyLtD_tK_xBDHPxT0Evw-ye-8R60-Pa6VMBJAjukJVwWLj3BE1i9hW449m-zBig&usqp=CAU"></img>
      <ul>
        <list className="category">  
          <Category />
          <button  className="autoriz">LOG IN</button>         
        </list>
      </ul>
    </div>
    </Link> 
    
  );
};

export default Header;         
