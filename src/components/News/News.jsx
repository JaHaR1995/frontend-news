import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "./news.slice";
import { Link } from "react-router-dom";  


const News = () => {
  const { categoryId } = useParams();  

  const news = useSelector((state) =>
    state.newsSlice.news.filter((item) => {   
      if (!categoryId) return true;  
      return item.category._id === categoryId;      
    })
  );
    
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="conteiner">
      {news.map((item) => {
        return (
          <div className="news-img" key={item._id}>
            <div className="image">
              <img src={`http://localhost:4000/${item.img} `} />   
            </div>
            <div className="name">{item.name.slice(0,200)}</div>
            <div className="descrip">{item.description.slice(0,100)}</div>   
               <Link to={`/news/${item._id}`}>
               <button className="strelka">morenews➡️</button>  
               </Link>
          </div>
        );
      })}
    </div>
  );
};

export default News;
