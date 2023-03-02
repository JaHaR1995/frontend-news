import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../components/Category/category.slice";
import newsSlice from "../components/News/news.slice";

export const store  = configureStore({  
    reducer: {
    newsSlice,
    categorySlice  
    }
})
