import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "./category.slice";

const Category = () => {
  const category = useSelector((state) => state.categorySlice.category);    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());            
  }, [dispatch]);
  return (
    <div className="siteheader">
      {category.map((elem) => {
        return (                         
          <Link to={`/category/${elem._id}`}>  
            <div key={elem.id} className="category">  
              {elem.name}
            </div>          
          </Link>  
        );
      })}
    </div>
  );
};

export default Category;
