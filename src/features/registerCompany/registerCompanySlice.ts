import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const postRegisterCompany = createAsyncThunk(
  'registerCompany/postInfo',
  async(data, thunkApi) => {
    try {
      const response = await fetch(`https://pick-and-drop.onrender.com/api/v1/auths/register/company`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
      })

      return await response.text()
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

interface IRegisterInfo {
  isLoading: boolean;
  error: null | string;
  data: null | string;
}

const initialState: IRegisterInfo = {
  isLoading: false,
  error: null,
  data: null
}

const registerCompanySlice = createSlice({
  name: "registerCompany",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postRegisterCompany.pending, (state) => ({...state, isLoading: true}))
      .addCase(postRegisterCompany.fulfilled, (state, action: PayloadAction<string>) => (
        {...state, data: action.payload, isLoading: false}
      ))
      .addCase(postRegisterCompany.rejected, (state, action: PayloadAction<any>) =>(
        {...state, error: action.payload, isLoading: false}
      ));
  },
})

export const registerCompanyAction = registerCompanySlice.actions;

export default registerCompanySlice.reducer;