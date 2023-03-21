import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './features/company/companySlice';
import themeReducer from './features/theme/themeSlice';
export const store =  configureStore({
  reducer: {
    darkTheme: themeReducer,
    companies: companyReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;