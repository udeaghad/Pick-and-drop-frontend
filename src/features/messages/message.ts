import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface messageState {
  msgLoaded: boolean;
  successMsg: null | string;
  errorMsg: null | string;
}

const initialState: messageState = {
  msgLoaded: false,
  successMsg: null,
  errorMsg: null,
}

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getSuccessMsg: (state, action: PayloadAction<string>) => ({...state, successMsg: action.payload, errorMsg: null, msgLoaded: true }),
    getErrorMsg: (state, action: PayloadAction<string> ) => ({...state, successMsg: null, errorMsg: action.payload, msgLoaded: true}),
    resetMsg: (state) => ({...state, successMsg: null, errorMsg: null, msgLoaded: false })
  }    
})

export const messageAction = messageSlice.actions;

export default messageSlice.reducer;