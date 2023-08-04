

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js'
import {apiSlice} from './slices/apiSlice.js'
import contactReducer from './slices/contactSlice.js'

const store = configureStore({
           
    reducer:{
      auth: authReducer,
      contacts: contactReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false


});

export default store;