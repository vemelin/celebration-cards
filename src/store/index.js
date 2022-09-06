import { configureStore } from '@reduxjs/toolkit';
import holidayReducer from './holidaysSlice';
import textReducer from './textSlice';
import imageReducer from './imageSlice';

export const store = configureStore({
    reducer: {
        holidays: holidayReducer,
        text: textReducer,
        image: imageReducer,
    }
});