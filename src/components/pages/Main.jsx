import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../Comments/Comments";
import { fetchNews } from "../News/news.slice";
import { addComments } from "../Comments/commentsSlice";     

const Main = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const [openComment, setOpenComments] = useState(false);
  const [comment, setAddComment] = useState("");

  const comments = useSelector((state) => state.commentsSlice.comments);  
  const token = useSelector((state) => state.applicationSlice.token);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const addComment = () => {
    dispatch(addComments({text: comment, news: newsId}));  
  };


  const oneNews = useSelector((state) => state.newsSlice.news).find(  
    (elem) => newsId === elem._id  
  );
  if (!oneNews) {
    return oneNews;
  }
  return (
    <div className="main">
      <div className="main-img">
        <img src={`http://localhost:4000/${oneNews.img} `} />
        <div className="name-info">{oneNews.name}</div>
        <div className="description">{oneNews.description}</div>          
        <button
          onClick={() => setOpenComments(!openComment)}   
          className="comment-btn"
        >
          comments
        </button>
      </div>
      {openComment && (
        <div className="addcomments">
          <div className="blockcoment">
            <Comment newsId={newsId} />  
          </div>
          {token && (
            <div className="div">
              <input
                value={comment}
                onChange={(e) => setAddComment(e.target.value)}  
                className="subcom"
                placeholder="add comments"
              />
              <button onClick={addComment} className="submit">   
                Submit
              </button>
            </div>
          )}
        </div>     
      )}
    </div>
  );
};

export default Main;
