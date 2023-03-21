import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getAllCompanies = createAsyncThunk(
  'allCompanies/fetchPosts',
  async (data, thunkApi) => {
    try {
      const response = await fetch(`https://pick-and-drop.onrender.com/api/v1/companies`)
      return await response.json()
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

interface