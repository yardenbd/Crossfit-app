import authReducer from './auth-slice'
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice'

const store = configureStore({
    reducer: {auth: authReducer.reducer , ui :uiReducer.reducer },
  });
  
  export default store;
  