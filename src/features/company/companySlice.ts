import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const getAllCompanies = createAsyncThunk(
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

interface ICompanyState {
  isLoading: boolean;
  error: null | string;
  data: null | any[]
}

const initialState: ICompanyState = {
  isLoading: false,
  error: null,
  data: null
}

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCompanies.pending, (state) => ({...state, isLoading: true}))
      .addCase(getAllCompanies.fulfilled, (state, action: PayloadAction<any[]>) => (
        {...state, data: action.payload, isLoading: false}
      ))
      .addCase(getAllCompanies.rejected, (state, action: PayloadAction<any>) =>(
        {...state, error: action.payload, isLoading: false}
      ));
  },
})

export const getAllCompaniesAction = companySlice.actions;

export default companySlice.reducer 