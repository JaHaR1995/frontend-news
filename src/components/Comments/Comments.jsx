import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentsSlice";
const Comment = (props) => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.commentsSlice.comments);   

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="ll">
      {comments
        .filter((comment) => comment.news === props.newsId)  
        .map((comment) => {
          return (
            <div key={comment._id} className="koments">   
              {comment.text}
            </div>                
          );
        })}
    </div>
  );
};

export default Comment;
