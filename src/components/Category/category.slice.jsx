import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
};

export const fetchCategory = createAsyncThunk(
  "fetch/category",
  async (_, thunkAPI) => {
    try {
      const category = await fetch("http://localhost:4000/category");   
      return category.json();
    } catch (error) {
      console.log(error);
    }
  }
);

export const categorySlice = createSlice({   
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default categorySlice.reducer;
