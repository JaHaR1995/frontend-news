import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null, 
  signUp: false,
  signIn: false,
  token: localStorage.getItem("token"), 
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/users", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const json = await res.json();
      if(json.error){
      return thunkAPI.rejectWithValue(json.error) 
      }
      return json;
    } catch (e) {
      thunkAPI.rejectWithValue(e);  
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/SignIn",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();

      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);  
      }
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const applicationSlice = createSlice({  
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authSignUp.fulfilled, (state) => {        
      state.error = null;
      state.signUp = true
    });
    builder.addCase(authSignIn.fulfilled, (state, action) => {  
      state.error = null;
      state.signIn = true
      state.token = action.payload;  
    });

    builder.addCase(authSignIn.rejected, (state, action)=>{  
      state.error = action.payload 
    })
  },
});

export default applicationSlice.reducer;
