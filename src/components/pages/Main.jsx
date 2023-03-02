import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";  
import { useParams } from "react-router-dom";
import { fetchNews } from "../News/news.slice";

const Main = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const oneNews = useSelector((state) => state.newsSlice.news).find(  
    (elem) => newsId === elem._id
  );
  if (!oneNews) {          
    return oneNews
  }
  return (
    <div className="main">
      <div className="main-img"> 
      <img src={`http://localhost:4000/${oneNews.img} `} />  
      <div className="name-info">
      {oneNews.name} 
      </div>
      <div className="description">   
      {oneNews.description} 
      </div>
      <button  className="comment-btn">Add comment</button>  
      </div>  
    </div>
  );
};

export default Main;
