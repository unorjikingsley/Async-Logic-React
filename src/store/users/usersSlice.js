import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    const resp = (await fetch('https://randomuser.me/api/?results=5'));
    const userData = resp.json();
    
    console.log(userData);
    return userData;
    // return resp.results
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch users')
  }
})

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload.results
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
  },
})

// export const { reducer: usersReducer } = usersSlice;
// export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;