import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: null  
};

export const fetchUsers = createAsyncThunk("fetch/users", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/users", {
    });
    const users = await res.json();
    return users;
  } catch (e) {
    thunkAPI.rejectWithValue(e);  
  }
});

export const userSlice = createSlice({  
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {    
      state.users = action.payload;  
    });
    
  },
});

export default userSlice.reducer;
