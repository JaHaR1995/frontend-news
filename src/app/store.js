import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../components/Category/category.slice";
import commentsSlice from "../components/Comments/commentsSlice";
import newsSlice from "../components/News/news.slice";
import usersSlice from "../components/Users/usersSlice";
import  applicationSlice  from "../features/applicationSlice";   


export const store  = configureStore({  
    reducer: {
    newsSlice,
    categorySlice,
    usersSlice,
    applicationSlice,  
    commentsSlice
     
    }
})
