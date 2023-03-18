import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";

type ThemeState = boolean;

const initialState: ThemeState = false;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return (state = !state)
    }
  }
});

export const { toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;