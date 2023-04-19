import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './features/company/companySlice';
import themeReducer from './features/theme/themeSlice';
import registerCompanyReducer from './features/registerCompany/registerCompanySlice';
import messageReducer from './features/messages/message';
export const store =  configureStore({
  reducer: {
    darkTheme: themeReducer,
    companies: companyReducer,
    registerCompany: registerCompanyReducer,
    message: messageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;