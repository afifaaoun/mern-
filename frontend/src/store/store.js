import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice';
import blogSlice from './blogSlice';
import userSlice from './userSlice';
import cardSlice from './cardSlice';


export default configureStore({
    reducer:{
        Book: bookSlice,
        Blog: blogSlice,
        User: userSlice,
        cart : cardSlice,        
    },
});