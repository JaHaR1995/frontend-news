import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const fetchComments = createAsyncThunk(
  "fetch/comments",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comments", {});
      const comments = await res.json();
      return comments;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addComments = createAsyncThunk(
  "add/comments",
  async ({ text, news }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comments", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
        },
        body: JSON.stringify({
          news,
          text,
        }),
      });
      const comment = await res.json();
      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);  
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {  
      state.comments = action.payload;
    });
    builder.addCase(addComments.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
  },
});

export default commentsSlice.reducer;   
