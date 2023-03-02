import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

  const initialState = {
    news: []
}


 export const fetchNews = createAsyncThunk(    
    'fetch/news',
    async ( _, thunkAPI) =>{
        try{
            const res = await fetch("http://localhost:4000/news");   
            const news = res.json()
            return news 
        }catch(error){
            console.log(error.message)   
        }
    }
 )


 export const newsSlice = createSlice({   
    name: 'news',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{  
        builder.addCase(fetchNews.fulfilled,(state, action) =>{   
            state.news = action.payload
        })   
    }
})

export default newsSlice.reducer